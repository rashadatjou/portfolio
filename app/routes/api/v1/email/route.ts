/*
 * File: /app/routes/api/v1/email.ts
 * Project: portfolio
 * Created: Thursday, 12th January 2023
 * Author: rashadatjou
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { ActionFunction } from "@remix-run/cloudflare";

import emailService from "~/services/email.service";

const composeEmail = ( senderEmail: string, message: string) => ({
  to: process.env.AWS_SMTP_EMAIL_TO, // Change to your recipient
  from: process.env.AWS_SMTP_EMAIL_FORM, // Change to your verified sender
  subject: "Portfolio website support",
  html: `
  <p>${senderEmail}</p>
  <p>Message:<p>
  <p>${message}<p>
  `,
});

export const action: ActionFunction = async ({ request }) => {
  const { email, message } = await request.json() as any;
  try {
    let composedEmail = composeEmail(email, message);
    await emailService.sendMail(composedEmail);
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(null, { status: 400 });
  }
};
