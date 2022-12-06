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

import { LinksFunction, ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

import Button from "~/components/Button";
import NavHeader from "~/components/NavHeader";

import { badRequest } from "~/utils/helper.server";
import {
  validateEmail,
  validateRange,
  validateString,
} from "~/services/validation.service";
import { useTranslation } from "react-i18next";

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
function validateFields(email: unknown, content: unknown) {
  const fieldErrors = new Map<string, string>();

  if (!validateEmail(email)) {
    fieldErrors.set(EMAIL_NAME, "Email is not in a valid format.");
  } else if (!validateRange(email as string, [4, 100])) {
    fieldErrors.set(
      EMAIL_NAME,
      "Email is shorter than 4 chars. or bigger than 100 chars.",
    );
  }

  if (!validateString(content)) {
    fieldErrors.set(MESSAGE_NAME, "Message is not valid type of string.");
  } else if (!validateRange(content as string, [4, 500])) {
    fieldErrors.set(
      MESSAGE_NAME,
      "Message is shorter than 4 chars. or bigger than 500 chars.",
    );
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

  if (typeof email !== "string" || typeof content !== "string") {
    return badRequest<ActionData>({
      formError: "Form not submitted correctly.",
    });
  }

  const fieldErrors = validateFields(email, content);

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
  // const { t } = useTranslation();

  return (
    <div className="contact-container">
      <NavHeader>
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="form" method="post">
          <fieldset>
            <label htmlFor={`contact__${EMAIL_NAME}`}>Email</label>
            <input
              id={`contact__${EMAIL_NAME}`}
              type="email"
              name={EMAIL_NAME}
              defaultValue={actionData?.fields?.email}
              placeholder="email@domain.tld"
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
            <label htmlFor={`contact__${MESSAGE_NAME}`}>Message</label>
            <textarea
              id={`contact__${MESSAGE_NAME}`}
              name={MESSAGE_NAME}
              defaultValue={actionData?.fields?.content}
              placeholder="Ask me anything"
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
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

// - Exports
export default ContactRoute;
