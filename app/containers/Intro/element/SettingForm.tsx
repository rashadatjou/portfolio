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

// - Components
const SettingsForm = () => {
  const { i18n, t } = useTranslation();
  return (
    <form action="get">
      <fieldset>
        <legend>Settings</legend>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="setting-language">Language</label>
          <select name="language" id="setting-language">
            {i18n.languages?.map((langCode) => (
              <option key={langCode} value={langCode}>
                {t(langCode)}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};

// - Exports
export default SettingsForm;
