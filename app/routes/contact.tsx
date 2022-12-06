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
import { getLocale, i18nRemix } from "~/services/i18n/i18n.server";
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
    content: string | undefined;
  };
  fields?: {
    email: string;
    content: string;
  };
};

// - Const
const EMAIL_NAME = "email";
const MESSAGE_NAME = "message";

// - Methods
function validateFields(
  email: unknown,
  content: unknown,
  translate: TFunction,
) {
  const fieldErrors = new Map<string, string>();

  if (!validateEmail(email)) {
    fieldErrors.set(EMAIL_NAME, translate("contact.form.email.error.1"));
  } else if (!validateRange(email as string, [4, 100])) {
    fieldErrors.set(EMAIL_NAME, translate("contact.form.email.error.2"));
  }

  if (!validateString(content)) {
    fieldErrors.set(MESSAGE_NAME, translate("contact.form.message.error.1"));
  } else if (!validateRange(content as string, [4, 500])) {
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
  const form = await request.formData();
  const email = form.get(EMAIL_NAME);
  const content = form.get(MESSAGE_NAME);

  const locale = await getLocale(request);
  const translate = await i18nRemix.getFixedT(request, "base");

  if (typeof email !== "string" || typeof content !== "string") {
    return badRequest<ActionData>({
      formError: "Form not submitted correctly.", // TODO: Translate??
    });
  }

  const fieldErrors = validateFields(email, content, translate);

  if (fieldErrors.size > 0) {
    return badRequest<ActionData>({
      fields: { email, content },
      fieldErrors: {
        email: fieldErrors.get(EMAIL_NAME),
        content: fieldErrors.get(MESSAGE_NAME),
      },
    });
  }

  return json({ status: "Success" }, { status: 200 });
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
              defaultValue={actionData?.fields?.content}
              placeholder={t("contact.form.message.label")}
              aria-invalid={!actionData?.fieldErrors?.email || undefined}
              aria-errormessage={
                actionData?.fieldErrors?.email ? "message-error" : undefined
              }
            />
            <ErrorLabel
              id="message-error"
              message={actionData?.fieldErrors?.content}
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
