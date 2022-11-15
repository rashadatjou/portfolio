/*
 * File: /app/routes/index.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { useCatch } from "@remix-run/react";
import { useTheme } from "~/context/theme";
import { useJsDetect } from "~/context/js-detect";

import IntroContainer, { links as introLinks } from "~/containers/Intro";

// - Route Module API
export const links: LinksFunction = () => {
  return [...introLinks];
};

// - Component
export default function MainRoute() {
  const {} = useTranslation(); // TODO:
  const [] = useTheme(); // TODO:
  const [] = useJsDetect(); // TODO:

  return (
    <div>
      <IntroContainer />
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
