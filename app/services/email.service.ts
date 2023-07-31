/*
 * File: /app/services/email.service.ts
 * Project: portfolio
 * Created: Friday, 13th January 2023
 * Author: rashadatjou
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import nodemailer from "nodemailer";

export const createEmailService = (context: any) =>
  nodemailer.createTransport({
    host: context.env.AWS_SMTP_ENDPOINT,
    port: context.env.AWS_SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: context.env.AWS_SMTP_USERNAME,
      pass: context.env.AWS_SMTP_PASSWORD,
    },
  });
