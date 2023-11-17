/*
 * File: /app/routes/_index.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/cloudflare";

import IntroView, { links as introLinks } from "~/views/Intro";

// - Route Module API
export const links: LinksFunction = () => {
  return [...introLinks];
};

// - Component
const MainRoute = () => {
  return <IntroView />;
};

// - Exports
export default MainRoute;