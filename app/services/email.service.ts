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

const emailServiceConfig: any = {
  host: process.env.AWS_SMTP_ENDPOINT,
  port: process.env.AWS_SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.AWS_SMTP_USERNAME,
    pass: process.env.AWS_SMTP_PASSWORD,
  },
};

const emailService = nodemailer.createTransport(emailServiceConfig);

export default emailService;
