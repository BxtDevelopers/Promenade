import { NextResponse } from "next/server";
import { issueBookingGrant } from "@/app/lib/bookingGuard";
import {
  getNexHealthConfig,
  listAvailableSlots,
  listBookableAppointmentTypes,
} from "@/app/lib/nexhealth";

export const dynamic = "force-dynamic";

/**
 * Availability for the booking UI.
 *
 * A route handler rather than a direct client call, for two reasons: the API
 * key stays on the server, and the browser never learns provider IDs, location
 * IDs, or the shape of the practice's schedule beyond the open times it is
 * being offered.
 *
 * The response is deliberately narrow — start time, end time, and an opaque
 * operatory reference. Everything else NexHealth returns stays here.
 */
export async function GET(request: Request) {
  const config = getNexHealthConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Online scheduling is not configured." },
      { status: 503 },
    );
  }

  const url = new URL(request.url);
  const appointmentTypeId = url.searchParams.get("appointmentTypeId") ?? undefined;

  // Clamped server-side. A caller asking for 400 days would be one expensive
  // upstream request per curious visitor.
  const days = Math.min(
    Math.max(Number(url.searchParams.get("days") ?? "14") || 14, 1),
    14,
  );

  const startDate =
    url.searchParams.get("startDate") ?? new Date().toISOString().slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
    return NextResponse.json({ error: "Invalid startDate." }, { status: 400 });
  }

  try {
    const types = await listBookableAppointmentTypes(config);

    // Duration comes from the selected type, and is passed as a slot length
    // rather than as a type filter — see listAvailableSlots for why. An
    // unrecognised id falls back to undefined rather than erroring, so a stale
    // client still gets availability instead of an empty calendar.
    const selected = appointmentTypeId
      ? types.find((t) => String(t.id) === appointmentTypeId)
      : undefined;

    const slots = await listAvailableSlots(config, {
      startDate,
      days,
      appointmentTypeId,
      durationMinutes: selected?.minutes,
    });

    /*
     * One entry per start time, not one per provider.
     *
     * The upstream response returns the same 9:00am five times when five
     * providers are free at 9:00am. Rendering that verbatim gave a grid of
     * 538 buttons for a fortnight, most of them visually identical — the
     * patient is choosing a time, not a dentist, and repeated identical
     * options read as a bug.
     *
     * The first provider offering each time is kept. For a single-dentist
     * practice this is a no-op; for a multi-provider one it would want an
     * explicit provider choice rather than this arbitrary pick, which is a
     * deliberate limitation to revisit if Promenade ever adds an associate.
     */
    const seen = new Set<string>();
    const unique = slots.filter((s) => {
      if (seen.has(s.time)) return false;
      seen.add(s.time);
      return true;
    });

    return NextResponse.json({
      // Presented back when booking, so a caller must have looked at
      // availability before it can write to the schedule.
      grant: issueBookingGrant(),
      appointmentTypes: types.map((t) => ({
        id: t.id,
        name: t.name,
        minutes: t.minutes,
      })),
      slots: unique.map((s) => ({
        time: s.time,
        endTime: s.end_time,
        operatoryId: s.operatory_id,
        providerId: s.provider_id,
      })),
    });
  } catch (error) {
    // Message only. These errors describe the request we made, never the
    // patient — but a full error object could carry a response body, so it is
    // narrowed before it reaches any log sink.
    console.error(
      "NexHealth availability lookup failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return NextResponse.json(
      { error: "Could not load available times." },
      { status: 502 },
    );
  }
}
