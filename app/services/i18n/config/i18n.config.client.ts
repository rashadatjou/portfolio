/*
 * File: /app/i18n/config/i18n.config.client.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { InitOptions } from "i18next";
import { getInitialNamespaces } from "remix-i18next";

export const i18nClientConfig: InitOptions = {
  // The default namespace of i18next is "translation", but you can customize it here
  react: { useSuspense: false },
  defaultNS: "base",
  fallbackLng: "en",
  // This function detects the namespaces your routes rendered while SSR use
  ns: getInitialNamespaces(),
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  detection: {
    // Here only enable htmlTag detection, we'll detect the language only
    // server-side with remix-i18next, by using the `<html lang>` attribute
    // we can communicate to the client the language detected server-side
    order: ["htmlTag"],
    // Because we only use htmlTag, there's no reason to cache the language
    // on the browser, so we disable it
    caches: [],
  },
  debug: true,
};
