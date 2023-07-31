import type {
  LinksFunction,
  V2_MetaFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";

import { json } from "@remix-run/cloudflare";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getLocale, i18nRemix } from "~/services/i18n/i18n.server";
import { i18nCookie } from "~/services/i18n/config/cookie";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";

import resetCssPath from "~/styles/reset.css";
import colorCssPath from "~/styles/color/theme.light.css";
import colorDarkCssPath from "~/styles/color/theme.dark.css";
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
  const description = translate("meta.description");

  const headers = new Headers();
  headers.set("Set-Cookie", await i18nCookie.serialize(locale));

  return json({ locale, title, description }, { headers });
};

export const meta: V2_MetaFunction = ({ data }) => [
  {
    charset: "utf-8",
    title: data.title,
    description: data.description,
    viewport: "width=device-width,initial-scale=1",
    "application-name": "@rashadatjou",
    generator: "remix.run",
  },
];

export const links: LinksFunction = () => {
  return [
    { rel: "manifest", href: "/manifest.webmanifest" },
    { rel: "icon", href: "favicon/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "favicon/apple-touch-icon.png",
    },
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

export default function Root() {
  const { locale } = useLoaderData<LoaderData>();
  const { i18n } = useTranslation();

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
