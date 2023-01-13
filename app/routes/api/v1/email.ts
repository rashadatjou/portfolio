/*
 * File: /app/routes/api/v1/email.ts
 * Project: portfolio
 * Created: Thursday, 12th January 2023
 * Author: rashadatjou
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { TFunction } from "i18next";
import type { ActionFunction } from "@remix-run/node";

import {
  validateEmail,
  validateRange,
  validateString,
} from "~/services/validation.service";
import type { ActionData } from "~/views/Contact";
import { i18nRemix } from "~/services/i18n/i18n.server";
import { badRequest } from "~/utils/helper.server";
import { json } from "@remix-run/node";
import { EMAIL_FIELD, MESSAGE_FIELD } from "~/views/Contact";

const composeEmail = (senderEmail: string, message: string) => ({
  to: "test@example.com", // Change to your recipient
  from: senderEmail, // Change to your verified sender
  subject: "Portfolio website support",
  text: message,
});

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

export const action: ActionFunction = async ({ request }) => {
  const translate = await i18nRemix.getFixedT(request, "base");
  const form = await request.formData();
  const email = form.get(EMAIL_FIELD);
  const message = form.get(EMAIL_FIELD);

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

  // TODO: Send email...

  // TODO: Redirect back to about page with proper response
  return json({ message: translate("contact.form.success") }, { status: 200 });
};
