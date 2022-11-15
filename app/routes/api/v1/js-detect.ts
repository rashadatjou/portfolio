/*
 * File: /app/routes/api/v1/js-detect.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { jsDetectCookie } from "~/services/js-detect/cookie";

// - Route Module API
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const xjs = url.searchParams.get("xjs");
  const enabled = new Boolean(xjs);

  return redirect(`/?xjs=${enabled.toString()}`, {
    headers: {
      "x-javascript": `${enabled.toString()}`,
      "Set-Cookie": await jsDetectCookie.serialize(enabled.toString()),
    },
  });
};
