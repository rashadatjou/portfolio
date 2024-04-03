/*
 * File: /app/routes/about.tsx
 * Project: portfolio
 * Created: Tuesday, 6th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction, LoaderArgs } from "@remix-run/cloudflare";
import type { GitUser } from "~/typings/git";

import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { mapGitUser } from "~/mapper/git.mapper";

import AboutView, { links as cssLinks } from "~/views/About";
import GIT_USER_DATA from "~/mock/git/user.json";

// - Module Route API
export const links: LinksFunction = () => {
  return [...cssLinks];
};

export const loader = async ({}: LoaderArgs) => {
  const data = mapGitUser(GIT_USER_DATA) as GitUser;
  return json(data, { status: 200 });
};

// - Components
const AboutRoute = () => {
  const data = useLoaderData<GitUser>();
  return <AboutView gitUser={data} />;
};

// - Exports
export default AboutRoute;
