/*
 * File: /app/views/Intro/element/ThemeForm.tsx
 * Project: portfolio
 * Created: Friday, 18th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { FormEvent } from "react";

import storage from "~/services/storage.service";
import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@themeit/react";

/*
CSS Files:
* form.css
*/

// - Types
type Props = {};

// - Component
function ThemeForm({}: Props) {
  const { t } = useTranslation();
  const [{ theme, themeList }, { changeTheme }] = useTheme();

  const onChangeForm = (event: FormEvent) => {
    const formData = new FormData(event.currentTarget as any);
    const newTheme = formData.get("theme");
    if (typeof newTheme !== "string") return;
    changeTheme?.(newTheme);
    storage.save("THEME_KEY", newTheme);
  };

  return (
    <Form className="form" method="get" onChange={onChangeForm}>
      <fieldset>
        <label htmlFor="theme-select">{t("setting.theme.title")}</label>
        <select name="theme" id="theme-select" defaultValue={theme}>
          {themeList?.map((item) => (
            <option key={item} value={item}>
              {t(item)}
            </option>
          ))}
        </select>
      </fieldset>
    </Form>
  );
}

// - Exports
export default ThemeForm;
