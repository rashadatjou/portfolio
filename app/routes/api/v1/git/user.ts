/*
 * File: /app/routes/api/v1/git.ts
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { json, LoaderFunction } from "@remix-run/node";
import { mapGitResponse } from "~/mapper/git.mapper";
import { ApiGitUser } from "~/typings/git";
import { fakeFetch } from "~/utils/helper.server";

// - Const
const BASE_URL = "https://api.github.com";
// const API_VERSION = "2022-11-28";
// const HEADERS = new Headers({
//   Accept: "application/vnd.github+json",
//   Authorization: `token ${process.env.GIT_TOKEN}`,
//   "X-GitHub-Api-Version": API_VERSION,
// });

const MOCK = JSON.parse(`
{
  "login": "Denpex",
  "id": 28106084,
  "node_id": "MDQ6VXNlcjI4MTA2MDg0",
  "avatar_url": "https://avatars.githubusercontent.com/u/28106084?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Denpex",
  "html_url": "https://github.com/Denpex",
  "followers_url": "https://api.github.com/users/Denpex/followers",
  "following_url": "https://api.github.com/users/Denpex/following{/other_user}",
  "gists_url": "https://api.github.com/users/Denpex/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Denpex/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Denpex/subscriptions",
  "organizations_url": "https://api.github.com/users/Denpex/orgs",
  "repos_url": "https://api.github.com/users/Denpex/repos",
  "events_url": "https://api.github.com/users/Denpex/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Denpex/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mehdi Rashadatjou",
  "company": null,
  "blog": "https://mehdi-rashadatjou.com",
  "location": null,
  "email": "rashadatjou.mehdi@gmail.com",
  "hireable": null,
  "bio": "Simple react and iOS developer.",
  "twitter_username": "drac0Core",
  "public_repos": 4,
  "public_gists": 1,
  "followers": 1,
  "following": 9,
  "created_at": "2017-04-27T14:56:33Z",
  "updated_at": "2022-12-07T13:15:52Z"
}
`);

// - API
// TODO: Get all repos.
// TODO: Get single repo.

// - Route Module API
export const loader: LoaderFunction = async ({}) => {
  try {
    const url = `${BASE_URL}/user`;
    console.log("git/user:", url);
    // const res = await fetch(url, {
    //   method: "get",
    //   headers: HEADERS,
    // });
    // const jsonResponse = await res.json();
    // console.log("res", jsonResponse);
    const res = await fakeFetch(Math.random() * 1500, MOCK);
    const cleanRes = mapGitResponse(res as ApiGitUser);
    return json(cleanRes, { status: 200 });
  } catch (error) {
    console.log("GIT ERROR:", error);
    return new Response("Failed", { status: 400 });
  }
};
