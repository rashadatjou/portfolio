/*
 * File: /app/routes/api/v1/git.ts
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import gitUserMock from "~/mock/git/user.json";

import type { LoaderFunction } from "@remix-run/cloudflare";
import type { ApiGitUser } from "~/typings/git";

import { json } from "@remix-run/cloudflare";
import { mapGitUser } from "~/mapper/git.mapper";
import { fakeFetch } from "~/utils/helper.server";
// import { BASE_URL, HTTP_HEADERS } from "~/constants/git";

// - GET
export const loader: LoaderFunction = async ({}) => {
  // try {
  // if (process.env.NODE_ENV === "development") {
  console.log("git/user/mock");
  const res = await fakeFetch(Math.random() * 500, gitUserMock);
  const cleanRes = mapGitUser(res as ApiGitUser);
  return json(cleanRes, { status: 200 });
  // }

  //   const url = `${BASE_URL}/user`;
  //   const res = await fetch(url, { method: "get", headers: HTTP_HEADERS });
  //   const jsonRes = await res.json();
  //   const cleanRes = mapGitUser(jsonRes);
  //   return json(cleanRes, { status: 200 });
  // } catch (error) {
  //   console.log("GIT ERROR:", error);
  //   return new Response("Failed", { status: 400 });
  // }
};
