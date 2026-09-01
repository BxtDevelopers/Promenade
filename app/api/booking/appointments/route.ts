import { NextResponse } from "next/server";
import {
  createAppointment,
  getNexHealthConfig,
  SlotUnavailableError,
} from "@/app/lib/nexhealth";
import {
  clientIp,
  isBookingGuardConfigured,
  rateLimit,
  verifyBookingGrant,
} from "@/app/lib/bookingGuard";

export const dynamic = "force-dynamic";

/**
 * Books an appointment.
 *
 * Everything in the request body is PHI. Nothing here logs the body, and
 * validation failures report which field was wrong, never what it contained.
 *
 * NOTE — this endpoint is unauthenticated by necessity (a prospective patient
 * has no account) and it writes into the practice's schedule. Before this goes
 * anywhere near production it needs rate limiting and a bot check; without
 * them a script can fill a real dentist's day. The Dentva widget carries that
 * protection on its side, and taking booking first-party means taking this on
 * too. Validation below is a floor, not a substitute.
 */

const ISO_WITH_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = Record<string, unknown>;

function str(body: Body, key: string, max = 120): string {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const config = getNexHealthConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Online scheduling is not configured." },
      { status: 503 },
    );
  }

  /*
   * Refuse to write to a real schedule with the guard switched off. Failing
   * closed here is the whole point: an unprotected public booking endpoint
   * pointed at production is worse than no online booking, and a missing
   * environment variable should not be able to produce that quietly.
   */
  if (!isBookingGuardConfigured()) {
    console.error("BOOKING_GUARD_SECRET is not set; refusing to accept bookings.");
    return NextResponse.json(
      {
        error:
          "Online booking is temporarily unavailable. Please call (480) 802-8188.",
      },
      { status: 503 },
    );
  }

  const limit = rateLimit(clientIp(request));
  if (!limit.allowed) {
    return NextResponse.json(
      {
        error:
          "Too many booking attempts. Please call (480) 802-8188 and we will help.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const body = (await request.json().catch(() => null)) as Body | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const grant = verifyBookingGrant(str(body, "grant", 80) || undefined);
  if (grant !== "ok") {
    // One message for every failure mode. Telling a caller which check it
    // failed tells it how to pass next time.
    return NextResponse.json(
      { error: "Your session expired. Please reload and pick a time again." },
      { status: 403 },
    );
  }

  const firstName = str(body, "firstName", 60);
  const lastName = str(body, "lastName", 60);
  const email = str(body, "email", 160);
  const phone = str(body, "phone", 20).replace(/\D/g, "");
  const dateOfBirth = str(body, "dateOfBirth", 10);
  const startTime = str(body, "startTime", 40);
  const endTime = str(body, "endTime", 40);
  const note = str(body, "note", 500);

  const providerId = Number(body.providerId);
  const appointmentTypeId = Number(body.appointmentTypeId);
  const operatoryId =
    body.operatoryId === null || body.operatoryId === undefined
      ? null
      : Number(body.operatoryId);

  const problems: string[] = [];
  if (!firstName) problems.push("firstName");
  if (!lastName) problems.push("lastName");
  if (!EMAIL.test(email)) problems.push("email");
  if (phone.length < 10) problems.push("phone");
  if (!DATE_ONLY.test(dateOfBirth)) problems.push("dateOfBirth");
  if (!ISO_WITH_OFFSET.test(startTime)) problems.push("startTime");
  if (!ISO_WITH_OFFSET.test(endTime)) problems.push("endTime");
  if (!Number.isFinite(providerId) || providerId <= 0) problems.push("providerId");
  if (!Number.isFinite(appointmentTypeId) || appointmentTypeId <= 0) {
    problems.push("appointmentTypeId");
  }

  // A slot in the past is either a stale page or a tampered request. Neither
  // should reach the practice's schedule.
  if (!problems.includes("startTime") && new Date(startTime) <= new Date()) {
    problems.push("startTime");
  }

  if (problems.length > 0) {
    return NextResponse.json(
      { error: "Some details are missing or invalid.", fields: problems },
      { status: 400 },
    );
  }

  try {
    const appointment = await createAppointment(config, {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      providerId,
      operatoryId,
      appointmentTypeId,
      appointmentTypeName: str(body, "appointmentTypeName", 80) || undefined,
      startTime,
      endTime,
      note: note || undefined,
    });

    return NextResponse.json(
      { id: appointment.id, startTime: appointment.startTime },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "NexHealth booking failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    /*
     * 409 only for a genuine slot conflict, which the client can act on by
     * reloading availability. Anything else is our problem, not the patient's
     * choice of time, and telling them to "pick another slot" when the real
     * fault is configuration would send them round a loop that never succeeds.
     */
    if (error instanceof SlotUnavailableError) {
      return NextResponse.json(
        { error: "That time is no longer available. Please choose another." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      {
        error:
          "We could not complete the booking. Please call (480) 802-8188 and we will get you scheduled.",
      },
      { status: 502 },
    );
  }
}
