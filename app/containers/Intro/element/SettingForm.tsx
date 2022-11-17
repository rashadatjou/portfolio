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
  const { i18n } = useTranslation();
  return (
    <form action="get">
      <fieldset>
        <legend>Settings</legend>
      </fieldset>
      <fieldset>
        <label htmlFor="setting-language">Language</label>
        <select name="language" id="setting-language">
          {i18n.languages.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </fieldset>
    </form>
  );
};

// - Exports
export default SettingsForm;
