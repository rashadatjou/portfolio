/*
 * File: /app/routes/contact.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import contactCSSPaths from "~/styles/container/contact.css";
import buttonCSSPaths from "~/styles/element/button.css";
import formCSSPaths from "~/styles/element/form.css";

import type { TFunction } from "i18next";
import type { LinksFunction, ActionFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { i18nRemix } from "~/services/i18n/i18n.server";
import { badRequest } from "~/utils/helper.server";
import {
  validateEmail,
  validateRange,
  validateString,
} from "~/services/validation.service";
import { useTranslation } from "react-i18next";

import Button from "~/components/Button";
import NavHeader from "~/components/NavHeader";

// - Types
type ErrorLabelProps = {
  id?: string;
  message?: string;
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    message: string | undefined;
  };
  fields?: {
    email: string;
    message: string;
  };
};

// - Const
const EMAIL_NAME = "email";
const MESSAGE_NAME = "message";

// - Methods
function validateFields(
  email: unknown,
  message: unknown,
  translate: TFunction,
) {
  const fieldErrors = new Map<string, string>();

  if (!validateEmail(email)) {
    fieldErrors.set(EMAIL_NAME, translate("contact.form.email.error.1"));
  } else if (!validateRange(email as string, [4, 100])) {
    fieldErrors.set(EMAIL_NAME, translate("contact.form.email.error.2"));
  }

  if (!validateString(message)) {
    fieldErrors.set(MESSAGE_NAME, translate("contact.form.message.error.1"));
  } else if (!validateRange(message as string, [4, 500])) {
    fieldErrors.set(MESSAGE_NAME, translate("contact.form.message.error.2"));
  }

  return fieldErrors;
}

// - Route Module API
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: contactCSSPaths },
    { rel: "stylesheet", href: buttonCSSPaths },
    { rel: "stylesheet", href: formCSSPaths },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const translate = await i18nRemix.getFixedT(request, "base");
  const form = await request.formData();
  const email = form.get(EMAIL_NAME);
  const message = form.get(MESSAGE_NAME);

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
        email: errors.get(EMAIL_NAME),
        message: errors.get(MESSAGE_NAME),
      },
    });
  }

  // TODO: Send email via a service

  return json({ message: translate("contact.form.success") }, { status: 200 });
};

// - Components
const ErrorLabel = ({ id, message }: ErrorLabelProps) => {
  if (!message) return null;
  return (
    <p className="error" role="alert" id={id}>
      {message}
    </p>
  );
};

const ContactRoute = () => {
  const actionData = useActionData<ActionData>();
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <NavHeader>
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="contact-content">
        <h1>{t("intro.link.2")}</h1>
        <form className="form" method="post">
          <fieldset>
            <label htmlFor={`contact__${EMAIL_NAME}`}>
              {t("contact.form.email.label")}
            </label>
            <input
              id={`contact__${EMAIL_NAME}`}
              type="email"
              name={EMAIL_NAME}
              defaultValue={actionData?.fields?.email}
              placeholder={t("contact.form.email.placeholder")}
              aria-invalid={!actionData?.fieldErrors?.email || undefined}
              aria-errormessage={
                actionData?.fieldErrors?.email ? "email-error" : undefined
              }
            />
            <ErrorLabel
              id="email-error"
              message={actionData?.fieldErrors?.email}
            />
          </fieldset>
          <fieldset>
            <label htmlFor={`contact__${MESSAGE_NAME}`}>
              {t("contact.form.message.label")}
            </label>
            <textarea
              id={`contact__${MESSAGE_NAME}`}
              name={MESSAGE_NAME}
              defaultValue={actionData?.fields?.message}
              placeholder={t("contact.form.message.placeholder")}
              aria-invalid={!actionData?.fieldErrors?.message || undefined}
              aria-errormessage={
                actionData?.fieldErrors?.message ? "message-error" : undefined
              }
            />
            <ErrorLabel
              id="message-error"
              message={actionData?.fieldErrors?.message}
            />
          </fieldset>
          <Button type="submit" buttonType="primary">
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

// - Exports
export default ContactRoute;
