import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

/* ── Abuse controls ──────────────────────────────────────────

   This endpoint is unauthenticated and sends mail through the
   practice's own SMTP account, so an unbounded caller can burn
   the account's sending reputation. The limiter below is
   in-process: on serverless it is per-instance, not global, so
   treat it as a speed bump rather than a guarantee. If abuse
   becomes real, move this to a shared store (Upstash/Redis) or
   put a CAPTCHA in front of the forms.
──────────────────────────────────────────────────────────── */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;                    // submissions per IP per window

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

/* ── Input handling ─────────────────────────────────────────── */

// Values are interpolated into an HTML email body, so every one of
// them must be escaped or a submitter controls markup landing in
// the practice inbox.
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  yourName: 100,
  friendName: 100,
  phone: 40,
  yourPhone: 40,
  friendContact: 200,
  email: 200,
  service: 120,
  date: 40,
  message: 2000,
  notes: 2000,
};

// Trim, cap length, and strip control characters (which are only
// useful here for spoofing structure inside the rendered email).
function clean(value: unknown, field: string): string {
  const max = MAX_LENGTHS[field] ?? 500;
  return String(value ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const REQUIRED: Record<string, string[]> = {
  contact:  ['name', 'email', 'message'],
  referral: ['yourName', 'friendName', 'friendContact'],
  booking:  ['name', 'phone'],
};

export async function POST(req: Request) {
  try {
    // Reject cross-origin posts when the browser tells us the origin.
    // Same-origin fetches from our own forms send a matching Origin;
    // server-to-server callers send none, so absence is not rejected.
    const origin = req.headers.get('origin');
    const host = req.headers.get('host');
    if (origin && host) {
      let originHost: string;
      try {
        originHost = new URL(origin).host;
      } catch {
        return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
      }
      if (originHost !== host) {
        return NextResponse.json({ error: 'Cross-origin request rejected' }, { status: 403 });
      }
    }

    const ip = clientIp(req);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again shortly, or call us.' },
        { status: 429 },
      );
    }

    let data: Record<string, unknown>;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const formType = String(data.formType ?? '');
    const required = REQUIRED[formType];
    if (!required) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Normalize every known field once, so nothing raw reaches the body.
    const f: Record<string, string> = {};
    for (const key of Object.keys(MAX_LENGTHS)) {
      if (key in data) f[key] = clean(data[key], key);
    }

    const missing = required.filter((key) => !f[key]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missing.join(', ')}` },
        { status: 400 },
      );
    }

    // Email is required for contact, optional elsewhere — but if it is
    // supplied it must be well-formed, since it becomes the Reply-To.
    if (f.email && !EMAIL_RE.test(f.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const e = (key: string, fallback = 'N/A') =>
      f[key] ? escapeHtml(f[key]) : fallback;

    let subject = '';
    let html = '';

    switch (formType) {
      case 'contact':
        subject = `New Contact Form Submission from ${f.name}`;
        html = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${e('name')}</p>
          <p><strong>Phone:</strong> ${e('phone')}</p>
          <p><strong>Email:</strong> ${e('email')}</p>
          <p><strong>Message:</strong><br/>${e('message')}</p>
        `;
        break;

      case 'referral':
        subject = `New Referral from ${f.yourName}`;
        html = `
          <h2>New Referral Submission</h2>
          <h3>Referrer Details</h3>
          <p><strong>Name:</strong> ${e('yourName')}</p>
          <p><strong>Phone:</strong> ${e('yourPhone')}</p>
          <hr />
          <h3>Friend Details</h3>
          <p><strong>Name:</strong> ${e('friendName')}</p>
          <p><strong>Contact:</strong> ${e('friendContact')}</p>
          <p><strong>Notes:</strong><br/>${e('notes', 'None provided')}</p>
        `;
        break;

      case 'booking':
        subject = `New Booking Request from ${f.name}`;
        html = `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${e('name')}</p>
          <p><strong>Phone:</strong> ${e('phone')}</p>
          <p><strong>Email:</strong> ${e('email')}</p>
          <p><strong>Service:</strong> ${e('service')}</p>
          <p><strong>Preferred Date:</strong> ${e('date')}</p>
          <p><strong>Additional Notes:</strong><br/>${e('message', 'None provided')}</p>
        `;
        break;
    }

    if (!process.env.MAILER_USER || !process.env.MAILER_PASS) {
      // Fail loudly rather than pretending the message was delivered.
      console.error('Mailer credentials are not configured');
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    await transporter.sendMail({
      from: process.env.MAILER_USER, // The authenticated Hostinger email
      to: "info@promenadedds.com",   // The destination email
      ...(f.email ? { replyTo: f.email } : {}),
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
