/*
 * File: /app/typings/theme.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { ContextResult } from "./context";

export type Theme = "light" | "dark";
export type ThemeLinkRecord = Record<string, HTMLLinkElement>;

export type ThemeContextState = {
  theme: Theme;
  linkList?: ThemeLinkRecord;
};

export type ThemeContextDispatch = {
  toggle: (value: Theme) => void;
};

export type ThemeContext = ContextResult<
  ThemeContextState,
  ThemeContextDispatch
>;
