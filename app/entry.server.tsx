/*
 * File: /app/entry.server.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { AppLoadContext, EntryContext } from "@remix-run/cloudflare";

import { RemixServer } from "@remix-run/react";
import { renderToReadableStream } from "react-dom/server";
import { i18nInterceptor } from "~/services/i18n/i18n.server";
import { I18nextProvider } from "react-i18next";

import isbot from "isbot";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext,
) {
  const i18n = await i18nInterceptor(request, remixContext);
  const body = await renderToReadableStream(
    <I18nextProvider i18n={i18n}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nextProvider>,
    {
      signal: request.signal,
      onError(error: unknown) {
        // Log streaming rendering errors from inside the shell
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get("user-agent"))) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
