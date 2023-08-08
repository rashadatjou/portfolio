/*
 * File: /app/services/i18n/hook.ts
 * Project: portfolio
 * Created: Tuesday, 1st August 2023
 * Author: rashadatjou
 * -----
 * Copyright 2023, ©Mehdi Rashadatjou
 * -----
 */

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}
