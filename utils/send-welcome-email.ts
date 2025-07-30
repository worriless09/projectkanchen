// utils/send-welcome-email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  await resend.emails.send({
    from: 'welcome@yourdomain.com',
    to,
    subject: 'Welcome to Kanchen Academy',
    html: '<h1>Thanks for joining!</h1>',
  });
}
