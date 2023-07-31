/*
 * File: /app/views/Contact/index.tsx
 * Project: portfolio
 * Created: Tuesday, 6th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import contactCSSPaths from "~/styles/views/contact.css";
import buttonCSSPaths from "~/styles/element/button.css";
import formCSSPaths from "~/styles/element/form.css";
import headerCssPath from "~/styles/element/header.css";
import modalCssPath from "~/styles/element/modal.css";

import type { TFunction } from "react-i18next";
import type { LinkDescriptor } from "@remix-run/cloudflare";

import Button from "~/components/Button";
import NavHeader from "~/components/Header";
import Modal from "~/components/Modal";
import { useEffect, useState } from "react";

// - Const
const EMAIL_FIELD = "email";
const MESSAGE_FIELD = "message";

// - Types
type ActionData = {
  formError?: string;
  response?: {
    message: string;
    success: boolean;
  };
  fieldErrors?: {
    [EMAIL_FIELD]: string | undefined;
    [MESSAGE_FIELD]: string | undefined;
  };
  fields?: {
    [EMAIL_FIELD]: string;
    [MESSAGE_FIELD]: string;
  };
};

type ErrorLabelProps = {
  id?: string;
  message?: string;
};

type Props = {
  t: TFunction;
  data?: ActionData;
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

const ContactView = ({ t, data }: Props) => {
  const [present, setPresent] = useState(false);

  useEffect(() => {
    setPresent(!!data?.response);
  }, [data]);

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
            <label htmlFor={`contact__${EMAIL_FIELD}`}>
              {t("contact.form.email.label")}
            </label>
            <input
              id={`contact__${EMAIL_FIELD}`}
              type="email"
              name={EMAIL_FIELD}
              defaultValue={data?.fields?.email}
              placeholder={t("contact.form.email.placeholder")}
              aria-invalid={!data?.fieldErrors?.email || undefined}
              aria-errormessage={
                data?.fieldErrors?.email ? "email-error" : undefined
              }
            />
            <ErrorLabel id="email-error" message={data?.fieldErrors?.email} />
          </fieldset>
          <fieldset>
            <label htmlFor={`contact__${MESSAGE_FIELD}`}>
              {t("contact.form.message.label")}
            </label>
            <textarea
              id={`contact__${MESSAGE_FIELD}`}
              name={MESSAGE_FIELD}
              defaultValue={data?.fields?.message}
              placeholder={t("contact.form.message.placeholder")}
              aria-invalid={!data?.fieldErrors?.message || undefined}
              aria-errormessage={
                data?.fieldErrors?.message ? "message-error" : undefined
              }
            />
            <ErrorLabel
              id="message-error"
              message={data?.fieldErrors?.message}
            />
          </fieldset>
          <Button type="submit" buttonType="primary">
            {t("contact.form.submit")}
          </Button>
        </form>
        <Modal present={present}>
          <p className={!data?.response?.success ? "error" : ""} role="alert">
            {data?.response?.message}
          </p>
          <Button
            buttonType="primary"
            type="reset"
            onClick={() => {
              setPresent(false);
            }}>
            {t("okay")}
          </Button>
        </Modal>
      </div>
    </div>
  );
};

// - Exports
export default ContactView;
export { EMAIL_FIELD, MESSAGE_FIELD };
export type { ActionData };
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: contactCSSPaths },
  { rel: "stylesheet", href: buttonCSSPaths },
  { rel: "stylesheet", href: formCSSPaths },
  { rel: "stylesheet", href: headerCssPath },
  { rel: "stylesheet", href: modalCssPath },
];
