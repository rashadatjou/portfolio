/*
 * File: /app/utils/client-helper.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

export function isServerSide(): boolean {
  return typeof document === "undefined";
}
