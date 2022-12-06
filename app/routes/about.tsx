/*
 * File: /app/routes/about.tsx
 * Project: portfolio
 * Created: Tuesday, 6th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/node";

import AboutView, { links as cssLinks } from "~/views/About";

// - Types
type Props = {};

// - Module Route API
export const links: LinksFunction = () => {
  return [...cssLinks];
};

// - Components
const AboutRoute = (props: Props) => {
  return <AboutView />;
};

// - Exports
export default AboutRoute;
