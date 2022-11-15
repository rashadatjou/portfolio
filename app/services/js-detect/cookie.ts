/*
 * File: /app/services/js-detect/cookie.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { createCookie } from "@remix-run/node";

export const jsDetectCookie = createCookie("xjs", {
  sameSite: "lax",
  path: "/",
});
