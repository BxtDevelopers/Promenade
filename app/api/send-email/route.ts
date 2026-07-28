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

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...formData } = data;

    let subject = '';
    let html = '';

    // Route logic based on which form was submitted
    switch (formType) {
      case 'contact':
        subject = `New Contact Form Submission from ${formData.name}`;
        html = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong><br/>${formData.message}</p>
        `;
        // Note: If your CustomReasonDropdown adds a 'reason' field to the form data, 
        // you can include it here like: <p><strong>Reason:</strong> ${formData.reason}</p>
        break;

      case 'referral':
        subject = `New Referral from ${formData.yourName}`;
        html = `
          <h2>New Referral Submission</h2>
          <h3>Referrer Details</h3>
          <p><strong>Name:</strong> ${formData.yourName}</p>
          <p><strong>Phone:</strong> ${formData.yourPhone || 'N/A'}</p>
          <hr />
          <h3>Friend Details</h3>
          <p><strong>Name:</strong> ${formData.friendName}</p>
          <p><strong>Contact:</strong> ${formData.friendContact}</p>
          <p><strong>Notes:</strong><br/>${formData.notes || 'None provided'}</p>
        `;
        break;

      case 'booking':
        subject = `New Booking Request from ${formData.name}`;
        html = `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Service:</strong> ${formData.service || 'N/A'}</p>
          <p><strong>Preferred Date:</strong> ${formData.date || 'N/A'}</p>
          <p><strong>Additional Notes:</strong><br/>${formData.message || 'None provided'}</p>
        `;
        break;

      default:
        return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Send the email
    await transporter.sendMail({
      from: process.env.MAILER_USER, // The authenticated Hostinger email
      to: "zee@bixeltek.com",   // The destination email
      replyTo: formData.email,       // Allows you to hit "Reply" directly to the user
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}