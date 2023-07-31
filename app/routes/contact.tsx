/*
 * File: /app/routes/contact.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { TFunction } from "i18next";
import { LinksFunction, ActionFunction, json } from "@remix-run/cloudflare";
import type { ActionData } from "~/views/Contact";

import { i18nRemix } from "~/services/i18n/i18n.server";
import { useActionData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { badRequest } from "~/utils/helper.server";
import { createEmailService } from "~/services/email.service";

import ContactView, {
  links as contactViewLinks,
  EMAIL_FIELD,
  MESSAGE_FIELD,
} from "~/views/Contact";

import {
  validateEmail,
  validateRange,
  validateString,
} from "~/services/validation.service";

// - Const
const generateResponse = (message: string, success: boolean) => ({
  response: {
    message,
    success,
  },
});

// - Helpers
function validateFields(
  email: unknown,
  message: unknown,
  translate: TFunction,
) {
  const fieldErrors = new Map<string, string>();

  if (!validateEmail(email)) {
    fieldErrors.set(EMAIL_FIELD, translate("contact.form.email.error.1"));
  } else if (!validateRange(email as string, [4, 100])) {
    fieldErrors.set(EMAIL_FIELD, translate("contact.form.email.error.2"));
  }

  if (!validateString(message)) {
    fieldErrors.set(MESSAGE_FIELD, translate("contact.form.message.error.1"));
  } else if (!validateRange(message as string, [4, 500])) {
    fieldErrors.set(MESSAGE_FIELD, translate("contact.form.message.error.2"));
  }

  return fieldErrors;
}

const composeEmail = (senderEmail: string, message: string) => ({
  to: process.env.AWS_SMTP_EMAIL_TO, // Change to your recipient
  from: process.env.AWS_SMTP_EMAIL_FORM, // Change to your verified sender
  subject: "Portfolio website support",
  html: `
  <p>${senderEmail}</p>
  <p>Message:<p>
  <p>${message}<p>
  `,
});

// - Route Module API
export const links: LinksFunction = () => {
  return [...contactViewLinks];
};

export const action: ActionFunction = async ({ request, context }) => {
  const translate = await i18nRemix.getFixedT(request, "base");
  const form = await request.formData();
  const email = form.get(EMAIL_FIELD);
  const message = form.get(MESSAGE_FIELD);

  if (typeof email !== "string" || typeof message !== "string") {
    return badRequest<ActionData>({
      formError: translate("contact.form.failure"),
    });
  }

  const errors = validateFields(email, message, translate);
  if (errors.size > 0) {
    return badRequest<ActionData>({
      fields: { email, message },
      fieldErrors: {
        email: errors.get(EMAIL_FIELD),
        message: errors.get(MESSAGE_FIELD),
      },
    });
  }

  // // Send email
  // let env = context.env as any;
  // const baseUrl = env.BASE_URL;
  // if (baseUrl === null) {
  //   return json(generateResponse(translate("contact.form.failure"), false), {
  //     status: 400,
  //   });
  // }

  // let composedEmail = composeEmail(email, message);

  // try {
  //   await createEmailService(context).sendMail(composedEmail);
  //   return json(generateResponse(translate("contact.form.success"), true), {
  //     status: 200,
  //   });
  // } catch (error) {
  //   return json(generateResponse(translate("contact.form.failure"), false), {
  //     status: 400,
  //   });
  // }
};

// - Components
const ContactRoute = () => {
  const actionData = useActionData();
  const { t } = useTranslation();
  return <ContactView t={t} data={actionData} />;
};

// - Exports
export default ContactRoute;
