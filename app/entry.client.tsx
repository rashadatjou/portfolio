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
import { ThemeProvider } from "~/context/theme";
import { getClientCSSLinks, getTheme } from "~/services/theme";

const linkList = getClientCSSLinks();
const pickedTheme = getTheme();

localizeRoot((i18n) => {
  hydrateRoot(
    document,
    <I18nextProvider i18n={i18n}>
      <JsDetectProvider jsEnabled>
        <ThemeProvider
          defaultTheme={pickedTheme || "light"}
          linkList={linkList}>
          <RemixBrowser />
        </ThemeProvider>
      </JsDetectProvider>
    </I18nextProvider>,
  );
});
