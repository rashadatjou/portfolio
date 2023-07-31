/*
 * File: /app/views/Intro/element/JavascriptForm.tsx
 * Project: portfolio
 * Created: Friday, 18th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { ChangeEvent } from "react";

import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { deleteCookies } from "~/services/cookies.service";
import { useState } from "react";

import storage from "~/services/storage.service";

import SwitchInput from "~/components/SwitchInput";

// - Types
type Props = {};

// - Const
const SWITCH_NAME = "cookies";

// - Component
function CookieForm({}: Props) {
  const [checked, setChecked] = useState(storage.get("COOKIE_KEY") === "true");
  const { t } = useTranslation();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;

    if (value) {
      deleteCookies();
    }

    storage.save("COOKIE_KEY", `${value}`);
    setChecked(value);
  };

  return (
    <Form className="form">
      <fieldset className="linear">
        <span className="label">{t("setting.cookie.title")}</span>
        <SwitchInput
          name={SWITCH_NAME}
          checked={checked}
          onChange={onChange}
          rounded
        />
      </fieldset>
    </Form>
  );
}

// - Exports
export default CookieForm;
