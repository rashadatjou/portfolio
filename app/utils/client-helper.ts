/*
 * File: /app/utils/client-helper.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

export function isServerSide(): boolean {
  return typeof document === "undefined";
}
