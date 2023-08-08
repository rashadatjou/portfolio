/*
 * File: /app/entry.client.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { Theme } from "~/typings/theme";

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { localizeRoot } from "~/services/i18n/i18n.client";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@themeit/react";

import storage from "~/services/storage.service";

const defaultTheme = storage.get("THEME_KEY") as Theme;

localizeRoot((i18n) => {
  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18n}>
        <StrictMode>
          <ThemeProvider<Theme> defaultTheme={defaultTheme || "auto"}>
            <RemixBrowser />
          </ThemeProvider>
        </StrictMode>
      </I18nextProvider>,
    );
  });
});
