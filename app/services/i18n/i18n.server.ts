/*
 * File: /app/i18n/i18n.server.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { EntryContext } from "@remix-run/cloudflare";

import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { RemixI18Next } from "remix-i18next";
import { i18nServerConfig, i18nRemixConfig } from "./config/i18n.config.server";
import Backend from "i18next-fs-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import ChainedBackend from "i18next-chained-backend";

export const i18nRemix = new RemixI18Next(i18nRemixConfig);

import enLocale from "@public/locales/en/base.json";
import svLocale from "@public/locales/sv/base.json";
import bsLocale from "@public/locales/bs/base.json";

const availableLanguages = {
  en: {
    base: enLocale,
  },
  sv: {
    base: svLocale,
  },
  bs: {
    base: bsLocale,
  },
};

export async function i18nInterceptor(request: Request, context: EntryContext) {
  // First, we create a new instance of i18next so every request will have a
  // completely unique instance and not share any state
  let i18n = createInstance();

  // Then we detect locale from the request
  const language = await getLocale(request);

  // And here we detect what namespaces the routes about to render want to use
  const namespace = i18nRemix.getRouteNamespaces(context);

  await i18n
    .use(initReactI18next)
    .use(ChainedBackend)
    .init({
      ...i18nServerConfig,
      lng: language,
      ns: namespace,
      backend: {
        backends: [Backend, resourcesToBackend(availableLanguages)],
      },
    });

  return i18n;
}

export const getLocale = (request: Request) => i18nRemix.getLocale(request);
