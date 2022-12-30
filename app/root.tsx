/*
 * File: /app/root.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
  useLoaderData,
  Scripts,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import { getLocale, i18nRemix } from "~/services/i18n/i18n.server";
import { i18nCookie } from "~/services/i18n/config/cookie";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";

import resetCssPath from "~/styles/reset.css";
import colorCssPath from "~/styles/color/color.light.css";
import colorDarkCssPath from "~/styles/color/color.dark.css";
import typographyCssPath from "~/styles/typography.css";
import coreCssPath from "~/styles/core.css";
import sizeSCssPath from "~/styles/geometry/size.s.css";
import sizeMCssPath from "~/styles/geometry/size.m.css";
import sizeLCssPath from "~/styles/geometry/size.l.css";
import proportionCssPath from "~/styles/geometry/proportion.css";

// - Types
type LoaderData = {
  locale: string;
  title: string;
};

// - Route Module API
export const loader: LoaderFunction = async ({ request }) => {
  const locale = await getLocale(request);
  const translate = await i18nRemix.getFixedT(request, "base");
  const title = translate("meta.title");

  const headers = new Headers();
  headers.set("Set-Cookie", await i18nCookie.serialize(locale));

  return json({ locale, title }, { headers });
};

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: data.title,
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetCssPath },
    {
      rel: "stylesheet",
      href: colorCssPath,
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "stylesheet",
      href: colorDarkCssPath,
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "stylesheet",
      href: sizeMCssPath,
    },
    {
      rel: "stylesheet",
      href: sizeSCssPath,
      media: "print, (max-width: 650px)",
    },
    {
      rel: "stylesheet",
      href: sizeLCssPath,
      media: "screen and (min-width: 1024px)",
    },
    { rel: "stylesheet", href: coreCssPath },
    { rel: "stylesheet", href: typographyCssPath },
    { rel: "stylesheet", href: proportionCssPath },
  ];
};

export const handle = {
  i18n: "base",
};

// - Component
export default function Root() {
  const { locale } = useLoaderData<LoaderData>();
  const { i18n } = useTranslation();

  // Load language
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
