/*
 * File: /app/entry.client.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { localizeRoot } from "~/i18n/i18n.client";
import { I18nextProvider } from "react-i18next";
import { JsDetectProvider } from "~/context/js-detect";
import { ThemeProvider } from "@themeit/react";
import { Theme } from "~/typings/theme";

localizeRoot((i18n) => {
  hydrateRoot(
    document,
    <I18nextProvider i18n={i18n}>
      <JsDetectProvider jsEnabled>
        <ThemeProvider<Theme> defaultTheme="light" autoLoad>
          <RemixBrowser />
        </ThemeProvider>
      </JsDetectProvider>
    </I18nextProvider>,
  );
});
