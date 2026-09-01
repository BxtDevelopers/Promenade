import "server-only";

/**
 * NexHealth Synchronizer API client.
 *
 * Scope: this module talks to NexHealth and nothing else. It is server-only —
 * the API key is a long-lived credential that can read and write patient data,
 * and it must never reach the browser. The `server-only` import above turns a
 * mistaken client import into a build error rather than a leak.
 *
 * Booking data here is PHI. Nothing in this file logs a request or response
 * body, and callers should keep it that way: a stack trace with a patient's
 * date of birth in it is a reportable event, not a debugging convenience.
 */

const API_VERSION = "v3.0.0";

export type NexHealthConfig = {
  baseUrl: string;
  apiKey: string;
  subdomain: string;
  locationId: string;
  /** Providers whose availability is offered online. */
  providerIds: string[];
};

export function getNexHealthConfig(): NexHealthConfig | null {
  const apiKey = process.env.NEXHEALTH_API_KEY ?? "";
  const subdomain = process.env.NEXHEALTH_SUBDOMAIN ?? "";
  const locationId = process.env.NEXHEALTH_LOCATION_ID ?? "";
  const providerIds = (process.env.NEXHEALTH_PROVIDER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!apiKey || !subdomain || !locationId || providerIds.length === 0) return null;

  return {
    // Sandbox and production are different hosts. Defaulting to the sandbox
    // means a missing variable books into demo data rather than into a real
    // practice's schedule — the safe direction for that mistake to fail.
    baseUrl: process.env.NEXHEALTH_BASE_URL ?? "https://nexhealth.info",
    apiKey,
    subdomain,
    locationId,
    providerIds,
  };
}

/*
 * Bearer tokens last an hour. Re-authenticating on every request would both
 * waste a billable call and add a round trip to each one, so the token is held
 * in module scope and refreshed early.
 *
 * This cache is per-server-instance and deliberately simple. On serverless it
 * survives only as long as the instance does, which is the correct trade: a
 * shared token store would be another place for a credential to live.
 */
let cachedToken: { token: string; expiresAt: number } | null = null;

/** Refresh this long before actual expiry, so a token cannot die mid-request. */
const EXPIRY_MARGIN_MS = 5 * 60 * 1000;

async function getToken(config: NexHealthConfig): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - EXPIRY_MARGIN_MS) {
    return cachedToken.token;
  }

  const res = await fetch(`${config.baseUrl}/authenticates`, {
    method: "POST",
    headers: {
      "Nex-Api-Version": API_VERSION,
      Accept: "application/vnd.Nexhealth+json;version=2",
      // Note: the token exchange takes the raw key, NOT a "Bearer " prefix.
      // Every other call takes "Bearer <token>". Mixing them up returns 401
      // with no hint about which half is wrong.
      Authorization: config.apiKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`NexHealth authentication failed (${res.status})`);
  }

  const body = (await res.json()) as { data?: { token?: string } };
  const token = body.data?.token;
  if (!token) throw new Error("NexHealth authentication returned no token");

  cachedToken = { token, expiresAt: expiryFromJwt(token) };
  return token;
}

/**
 * Reads `exp` out of the JWT rather than assuming a fixed lifetime.
 *
 * The observed lifetime is one hour, but that is an observation, not a
 * contract. If NexHealth shortens it, an assumed hour would leave us using
 * dead tokens; falling back to a conservative 30 minutes if the claim cannot
 * be read costs one extra auth call and never breaks.
 */
function expiryFromJwt(token: string): number {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as { exp?: number };
    if (typeof decoded.exp === "number") return decoded.exp * 1000;
  } catch {
    // fall through
  }
  return Date.now() + 30 * 60 * 1000;
}

async function request<T>(
  config: NexHealthConfig,
  path: string,
  init: RequestInit & { params?: Record<string, string | string[]> } = {},
): Promise<T> {
  const { params, ...rest } = init;
  const token = await getToken(config);

  const url = new URL(`${config.baseUrl}${path}`);
  url.searchParams.set("subdomain", config.subdomain);
  for (const [key, value] of Object.entries(params ?? {})) {
    if (Array.isArray(value)) {
      // Array params are bracketed: lids[]=1&lids[]=2. Passing lids=1,2
      // returns 200 with an empty result rather than an error, so this is
      // worth getting right the first time.
      for (const v of value) url.searchParams.append(`${key}[]`, v);
    } else {
      url.searchParams.set(key, value);
    }
  }

  const res = await fetch(url, {
    ...rest,
    headers: {
      "Nex-Api-Version": API_VERSION,
      Accept: "application/vnd.Nexhealth+json;version=2",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...rest.headers,
    },
    cache: "no-store",
  });

  const body = (await res.json().catch(() => null)) as
    | { code?: boolean; data?: T; error?: string[] }
    | null;

  if (!res.ok || body?.code === false) {
    // The upstream error array is safe to surface — it describes the request,
    // not the patient. Response bodies are never included.
    const reason = body?.error?.join("; ") ?? `HTTP ${res.status}`;
    throw new Error(`NexHealth ${path} failed: ${reason}`);
  }

  return body?.data as T;
}

export type AppointmentType = {
  id: number;
  name: string;
  minutes: number;
  bookable_online: boolean;
};

/**
 * A slot as returned inside a group, plus the provider carried down onto it.
 *
 * The API reference documents `provider_id` on each slot. It is not there —
 * the live response has `pid` on the enclosing group and slots carrying only
 * time, end_time, operatory_id and working_hour_label_id. Flattening the
 * groups without copying `pid` down therefore loses the provider entirely,
 * and POST /appointments requires one, so every slot would be unbookable.
 */
export type Slot = {
  time: string;
  end_time: string;
  operatory_id: number | null;
  provider_id: number;
};

type RawSlot = Omit<Slot, "provider_id"> & { provider_id?: number };

type SlotGroup = { lid: number; pid: number | null; slots: RawSlot[] };

/** Appointment types the practice has marked bookable online. */
export async function listBookableAppointmentTypes(
  config: NexHealthConfig,
): Promise<AppointmentType[]> {
  const data = await request<AppointmentType[]>(config, "/appointment_types", {
    params: { location_id: config.locationId },
  });
  return (data ?? []).filter((t) => t.bookable_online);
}

/**
 * Open slots across the configured providers.
 *
 * `days` is capped at 14 because the endpoint documents that as its
 * performance limit. Note this is one billable call for the entire window —
 * fetching a fortnight costs the same as fetching a day, so callers should ask
 * for the whole range they might display rather than paginating by day.
 */
export async function listAvailableSlots(
  config: NexHealthConfig,
  opts: {
    startDate: string;
    days: number;
    appointmentTypeId?: string;
    durationMinutes?: number;
  },
): Promise<Slot[]> {
  const base = {
    start_date: opts.startDate,
    days: String(Math.min(Math.max(opts.days, 1), 14)),
    lids: [config.locationId],
    pids: config.providerIds,
  };

  /*
   * Ask by appointment type first; fall back to a raw duration only if that
   * returns nothing.
   *
   * Both paths are needed, because the endpoint behaves differently depending
   * on whether the practice has mapped its appointment types to provider or
   * operatory availability inside NexHealth:
   *
   *   - Mapped (this practice): appointment_type_id returns the times the type
   *     can actually be booked into — 7 slots in a fortnight where the
   *     unfiltered query returns 31. Asking by duration instead would offer
   *     all 31 and let the patient choose one of the 24 that gets rejected at
   *     the point of booking, after they have filled in the whole form.
   *
   *   - Unmapped (the sandbox, and any practice that has not configured it):
   *     appointment_type_id returns 200 with an empty slot array and no error,
   *     which is indistinguishable from "fully booked".
   *
   * The second call therefore only happens on a genuinely empty first result,
   * which is also the case where being wrong is most expensive.
   */
  const byType = opts.appointmentTypeId
    ? await request<SlotGroup[]>(config, "/available_slots", {
        params: { ...base, appointment_type_id: opts.appointmentTypeId },
      })
    : null;

  const groups =
    byType && byType.some((g) => (g.slots ?? []).length > 0)
      ? byType
      : await request<SlotGroup[]>(config, "/available_slots", {
          params: {
            ...base,
            // slot_interval held at 30 minutes so a longer appointment still
            // offers sensible start times, not only back-to-back ones.
            ...(opts.durationMinutes
              ? {
                  slot_length: String(opts.durationMinutes),
                  slot_interval: String(Math.min(30, opts.durationMinutes)),
                }
              : {}),
          },
        });

  return (groups ?? [])
    .flatMap((group) =>
      (group.slots ?? []).map((slot) => ({
        ...slot,
        // Group pid first: it is the field the API actually populates. The
        // per-slot value is kept as a fallback in case it starts appearing.
        provider_id: group.pid ?? slot.provider_id ?? 0,
      })),
    )
    .filter((slot): slot is Slot => slot.provider_id !== 0)
    .sort((a, b) => a.time.localeCompare(b.time));
}

export type BookingRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** YYYY-MM-DD */
  dateOfBirth: string;
  providerId: number;
  operatoryId: number | null;
  appointmentTypeId: number;
  /** Used to preserve the visit reason if the type itself cannot be attached. */
  appointmentTypeName?: string;
  /** ISO 8601 with offset, exactly as returned by /available_slots. */
  startTime: string;
  endTime: string;
  note?: string;
};

/**
 * Finds or creates the patient.
 *
 * `return_existing_if_match` is what makes this one call instead of a search
 * followed by a create. It also matters clinically rather than just
 * economically: a returning patient booked online must attach to their
 * existing chart, not spawn a duplicate that the front desk has to merge by
 * hand later.
 *
 * A 200 means matched, a 201 means created; both are success and the caller
 * does not need to care which.
 */
async function findOrCreatePatient(
  config: NexHealthConfig,
  req: BookingRequest,
): Promise<number> {
  const data = await request<{ user?: { id?: number }; id?: number }>(
    config,
    "/patients",
    {
      method: "POST",
      params: { location_id: config.locationId },
      body: JSON.stringify({
        provider: { provider_id: req.providerId },
        patient: {
          first_name: req.firstName,
          last_name: req.lastName,
          email: req.email,
          bio: {
            date_of_birth: req.dateOfBirth,
            phone_number: req.phone,
          },
        },
        return_existing_if_match: true,
      }),
    },
  );

  const id = data?.user?.id ?? data?.id;
  if (!id) throw new Error("NexHealth /patients returned no patient id");
  return id;
}

export type CreatedAppointment = { id: number; startTime: string };

/**
 * Books the appointment. Two upstream calls, patient then appointment.
 *
 * There is a race here that no client-side check can close: the slot may be
 * taken between the availability read and this write, either by another
 * visitor or by the front desk booking into the same operatory. The upstream
 * call is the only authority on whether the time is still free, so failures
 * are surfaced to the patient rather than papered over — telling someone they
 * have an appointment they do not have is far worse than asking them to pick
 * another time.
 */
export class SlotUnavailableError extends Error {}

/** Upstream's wording when a type is not mapped to the slot's availability. */
const TYPE_NOT_CONFIGURED = "not found to be configured";

export async function createAppointment(
  config: NexHealthConfig,
  req: BookingRequest,
): Promise<CreatedAppointment> {
  const patientId = await findOrCreatePatient(config, req);

  const submit = (withType: boolean) =>
    request<{ appt?: { id?: number; start_time?: string } }>(
      config,
      "/appointments",
      {
        method: "POST",
        params: { location_id: config.locationId },
        body: JSON.stringify({
          appt: {
            patient_id: patientId,
            provider_id: req.providerId,
            start_time: req.startTime,
            end_time: req.endTime,
            ...(req.operatoryId ? { operatory_id: req.operatoryId } : {}),
            ...(withType
              ? { appointment_type_id: req.appointmentTypeId }
              : {}),
            note: buildNote(req, withType),
            // Recorded upstream so the practice can tell a web booking from a
            // phone booking without asking the patient.
            referrer: "https://www.promenadedds.com/",
          },
          appointments_per_timeslot: 1,
        }),
      },
    );

  let data;
  try {
    data = await submit(true);
  } catch (error) {
    /*
     * Attaching the appointment type is the right thing to do — it drives
     * duration, colour and reporting downstream in the practice management
     * system. But it only works when the practice has mapped that type to the
     * slot's provider or operatory inside NexHealth, and a practice that has
     * not done so would otherwise be unable to take a single online booking.
     *
     * So a type-mapping rejection is retried without the type, with the visit
     * reason folded into the note instead. The appointment lands and the front
     * desk still knows what it is for; they lose structured typing until the
     * mapping is configured, which is a far better failure than a patient
     * being told the practice is fully booked.
     *
     * This costs one extra call only on the failing path.
     */
    const message = error instanceof Error ? error.message : "";
    if (!message.includes(TYPE_NOT_CONFIGURED)) {
      throw new SlotUnavailableError(message);
    }
    console.warn(
      "NexHealth: appointment type not mapped to this slot; booking without it.",
    );
    data = await submit(false);
  }

  const id = data?.appt?.id;
  if (!id) throw new Error("NexHealth /appointments returned no appointment id");
  return { id, startTime: data.appt?.start_time ?? req.startTime };
}

/** Keeps the visit reason visible even when the type could not be attached. */
function buildNote(req: BookingRequest, typeAttached: boolean): string {
  const parts = [];
  if (!typeAttached && req.appointmentTypeName) {
    parts.push(`Requested: ${req.appointmentTypeName}`);
  }
  if (req.note) parts.push(req.note);
  parts.push("Booked online at promenadedds.com");
  return parts.join(" — ");
}
