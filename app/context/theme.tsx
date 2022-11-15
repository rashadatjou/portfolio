/*
 * File: /app/context/theme.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type {
  Theme,
  ThemeContext,
  ThemeContextDispatch,
  ThemeContextState,
  ThemeLinkRecord,
} from "~/typings/theme";
import type { PropsWithChildren } from "react";

import { createContext, useState, useContext, useEffect } from "react";
import { changeTheme, saveTheme } from "~/services/theme";

// - Type
type Props = {
  defaultTheme: Theme;
  linkList?: ThemeLinkRecord;
};

// - Context
const defaultState: ThemeContext = [{}, {}];
const Context = createContext(defaultState);

// - Provider
const ThemeProvider = ({
  children,
  defaultTheme,
  linkList,
}: PropsWithChildren<Props>) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Set default theme
    if (linkList) changeTheme(defaultTheme, linkList);
  }, []);

  // Actions
  const onToggle = (newTheme: Theme) => {
    setTheme(newTheme);

    // Change theme
    if (!linkList) return;
    changeTheme(newTheme, linkList); // << Side-effect 🫣🫣 #1
    saveTheme(newTheme); // << Side-effect 🫣🫣 #2
  };

  // Combine
  const state: ThemeContextState = { theme, linkList };
  const dispatch: ThemeContextDispatch = { toggle: onToggle };
  const values: ThemeContext = [state, dispatch];

  return <Context.Provider value={values} children={children} />;
};

// - Hook
const useTheme = (): ThemeContext => useContext(Context);

// - Exports
export { ThemeProvider, useTheme };
