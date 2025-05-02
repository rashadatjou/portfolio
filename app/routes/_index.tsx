/*
 * File: /app/routes/_index.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
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