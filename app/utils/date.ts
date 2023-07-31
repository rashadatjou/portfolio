/*
 * File: /app/utils/date.ts
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

// - Const
const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  dateStyle: "long",
  timeStyle: "medium",
};

const DEFAULT_LOCALE = "en";

// - Stored
let storedFormatter: Intl.DateTimeFormat | null = null;

//- Public
export const getDateFormatter = (
  forLocale?: string,
  options?: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat => {
  if (storedFormatter === null) {
    return new Intl.DateTimeFormat(forLocale, options);
  }

  if (forLocale && storedFormatter.resolvedOptions().locale !== forLocale) {
    return new Intl.DateTimeFormat(forLocale, options);
  }

  return storedFormatter;
};

export function prettyPrintDate(
  dirtyDate: number | string | Date | undefined,
  locale: string = DEFAULT_LOCALE,
) {
  let cleanDate: Date;

  if (!dirtyDate) {
    throw new Error("No date provided");
  }

  if (typeof dirtyDate === "string" || typeof dirtyDate === "number") {
    cleanDate = new Date(dirtyDate);
  }

  if (typeof dirtyDate === "object") {
    cleanDate = dirtyDate;
  }

  const formatter = getDateFormatter(locale, DEFAULT_OPTIONS);
  return formatter.format(cleanDate!);
}
