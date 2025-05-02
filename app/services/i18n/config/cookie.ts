/*
 * File: /app/i18n/config/cookie.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

import { createCookie } from "@remix-run/cloudflare";

export const i18nCookie = createCookie("i18n", {
  sameSite: "lax",
  path: "/",
});
