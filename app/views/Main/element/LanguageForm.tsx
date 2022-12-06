/*
 * File: /app/views/Intro/element/SettingForm.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { FormEvent } from "react";

import { useTranslation } from "react-i18next";
import { Form, useSubmit } from "@remix-run/react";

// - Const
const LANGUAGES = ["en", "sv", "bs"];

// - Components
const LanguageForm = () => {
  const submit = useSubmit();
  const { t, i18n } = useTranslation();

  const onChange = (event: FormEvent) => {
    submit(event.currentTarget as any, { replace: false });
  };

  return (
    <Form className="form" method="get" onChange={onChange}>
      <fieldset>
        <label htmlFor="setting-language">{t("setting.language.title")}</label>
        <select
          name="lng"
          id="setting-language"
          defaultValue={i18n.resolvedLanguage}>
          {LANGUAGES.map((langCode) => (
            <option key={langCode} value={langCode}>
              {t(langCode)}
            </option>
          ))}
        </select>
      </fieldset>
    </Form>
  );
};

// - Exports
export default LanguageForm;
