/*
 * File: /app/containers/Intro/element/SettingForm.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { useTranslation } from "react-i18next";
import Button from "~/components/Button";

// - Const
const LANGUAGES = ["en", "sv", "bs"];

// - Components
const LanguageForm = () => {
  const { t, i18n } = useTranslation();

  return (
    <form method="get">
      <h3>Language</h3>
      <fieldset>
        <div>
          <label htmlFor="setting-language">Language</label>
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
        </div>
        <Button type="submit" buttonType="secondary">
          Apply
        </Button>
      </fieldset>
    </form>
  );
};

// - Exports
export default LanguageForm;
