/*
 * File: /app/services/cookies.service.ts
 * Project: portfolio
 * Created: Saturday, 19th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { isServerSide } from "~/utils/helpers.client";

function getAllCookies(): Array<string> {
  if (isServerSide()) return [];
  const { cookie } = document;
  const cookieList = cookie.split(";");
  return cookieList;
}

export function deleteCookies() {
  const cookies = getAllCookies();
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
