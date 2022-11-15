/*
 * File: /app/i18n/config/cookie.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { createCookie } from "@remix-run/node";

export const i18nCookie = createCookie("i18n", {
  sameSite: "lax",
  path: "/",
});
