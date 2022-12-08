/*
 * File: /app/routes/about.tsx
 * Project: portfolio
 * Created: Tuesday, 6th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import type { GitUser } from "~/typings/git";

import { json, fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import AboutView, { links as cssLinks } from "~/views/About";

// - Types
type Props = {};

// - Module Route API
export const links: LinksFunction = () => {
  return [...cssLinks];
};

export const loader: LoaderFunction = async ({}) => {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/git/user`);
  const data = await res.json(); // GitUser
  return json(data, { status: 200 });
};

// - Components
const AboutRoute = () => {
  const data = useLoaderData<GitUser>();
  return <AboutView gitUser={data} />;
};

// - Exports
export default AboutRoute;
