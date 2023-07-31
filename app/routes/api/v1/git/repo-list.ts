/*
 * File: /app/routes/api/v1/git/repo-list.ts
 * Project: portfolio
 * Created: Thursday, 8th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import repoListMock from "~/mock/git/repo-list.json";

import type { ApiGitRepo } from "~/typings/git";
import type { LoaderFunction } from "@remix-run/cloudflare";

import { json } from "@remix-run/cloudflare";
import { mapRepoList } from "~/mapper/git.mapper";
import { fakeFetch } from "~/utils/helper.server";
// import { BASE_URL, HTTP_HEADERS } from "~/constants/git";

// - GET
export const loader: LoaderFunction = async () => {
  // try {
    // if (process.env.NODE_ENV === "development") {
      console.log("git/repos/mock");
      const res = await fakeFetch(Math.random() * 500, repoListMock);
      const cleanRes = mapRepoList(res as ApiGitRepo[]);
      return json(cleanRes, { status: 200 });
    // }

  //   console.log("git/repos/prod");
  //   const url = new URL(`${BASE_URL}/user/repos`);
  //   url.searchParams.set("affiliation", "owner,collaborator");
  //   const res = await fetch(url, { method: "get", headers: HTTP_HEADERS });
  //   const jsonRes = await res.json();
  //   const cleanRes = mapRepoList(jsonRes);
  //   return json(cleanRes, { status: 200 });
  // } catch (error) {
  //   console.log("GIT ERROR:", error);
  //   return new Response("Failed", { status: 400 });
  // }
};
