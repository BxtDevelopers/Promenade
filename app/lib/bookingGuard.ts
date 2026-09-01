import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Abuse protection for the public booking endpoint.
 *
 * POST /api/booking/appointments is necessarily unauthenticated — a
 * prospective patient has no account — and it writes into a real dentist's
 * schedule. Left open, a script can fill every slot for a fortnight. That is
 * not a hypothetical: an appointment book is a small, finite, unauthenticated
 * resource, which is exactly the shape of thing that gets abused.
 *
 * Two independent defences, neither of which needs a database:
 *
 *   1. A signed grant, issued by the availability endpoint and required by the
 *      booking endpoint. A caller must therefore fetch availability first, and
 *      cannot POST bookings blind. The grant carries its issue time, so it
 *      also expires.
 *
 *   2. A per-IP sliding window (below).
 *
 * Neither stops a determined attacker who drives a real browser. They raise
 * the cost from "curl in a loop" to "write a scraper", which for a single
 * dental practice is the relevant threshold. A CAPTCHA or a managed bot
 * service is the next step if this ever becomes a real target.
 */

/**
 * Minimum plausible time between seeing availability and booking. A human
 * reads a grid of times, picks one, then types their name, date of birth,
 * phone and email. Under two seconds means nobody read anything.
 */
const MIN_AGE_MS = 2_000;

/** Beyond this the availability the grant was issued against is stale anyway. */
const MAX_AGE_MS = 30 * 60 * 1000;

function secret(): string | null {
  const value = process.env.BOOKING_GUARD_SECRET ?? "";
  // Deliberately no default. A hardcoded fallback would be published in the
  // repository, which is the same as having no signature at all — and worse,
  // it would look protected.
  return value.length >= 16 ? value : null;
}

/** Issued alongside availability; presented when booking. */
export function issueBookingGrant(): string | null {
  const key = secret();
  if (!key) return null;

  const issuedAt = Date.now().toString(36);
  const mac = createHmac("sha256", key).update(issuedAt).digest("base64url");
  return `${issuedAt}.${mac}`;
}

export type GrantResult = "ok" | "missing" | "invalid" | "too-fast" | "expired";

export function verifyBookingGrant(grant: string | undefined): GrantResult {
  const key = secret();
  // Fail open when unconfigured rather than blocking every booking. The
  // trade-off is deliberate and it is the wrong one for production, so
  // configuration is checked at the route boundary instead of silently here.
  if (!key) return "ok";

  if (!grant) return "missing";

  const [issuedAt, mac] = grant.split(".");
  if (!issuedAt || !mac) return "invalid";

  const expected = createHmac("sha256", key).update(issuedAt).digest("base64url");
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  // Length check first: timingSafeEqual throws on mismatched lengths.
  if (a.length !== b.length || !timingSafeEqual(a, b)) return "invalid";

  const age = Date.now() - parseInt(issuedAt, 36);
  if (Number.isNaN(age)) return "invalid";
  if (age < MIN_AGE_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "expired";

  return "ok";
}

export function isBookingGuardConfigured(): boolean {
  return secret() !== null;
}

/*
 * Per-IP sliding window.
 *
 * Module scope, so it is per server instance. On serverless that means an
 * attacker spread across instances gets a higher effective limit than the
 * number below suggests — this narrows the funnel, it does not close it. A
 * shared store (Vercel KV, Upstash) is the correct production answer and is
 * a deliberate follow-up, not an oversight.
 */
const WINDOW_MS = 60 * 60 * 1000;

/*
 * Every request counts, not just successful bookings — throttling the flood is
 * the point, and a script hammering invalid grants should be cut off too.
 *
 * That is why the limit is not tighter. A parent booking for two children, on
 * one household IP, who mistypes an email and reloads once, can plausibly
 * spend six or seven requests legitimately. Ten leaves room for that while
 * still capping a single source far below the volume needed to fill a
 * fortnight of a one-dentist practice.
 */
const MAX_PER_WINDOW = 10;

const attempts = new Map<string, number[]>();

export function rateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil(
      (WINDOW_MS - (now - recent[0])) / 1000,
    );
    attempts.set(ip, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  attempts.set(ip, recent);

  // Opportunistic sweep so a long-lived instance does not accumulate an entry
  // for every IP that ever booked.
  if (attempts.size > 5_000) {
    for (const [key, times] of attempts) {
      if (times.every((t) => now - t >= WINDOW_MS)) attempts.delete(key);
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Client IP.
 *
 * On Vercel `x-forwarded-for` is set by the platform edge and the leftmost
 * entry is the real client. Reading it this way off any other host would be
 * trivially spoofable, so this is safe here and would not be elsewhere.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}
