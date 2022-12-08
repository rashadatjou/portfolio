/*
 * File: /app/mapper/git.mapper.ts
 * Project: portfolio
 * Created: Thursday, 8th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { ApiGitUser, GitUser } from "~/typings/git";

export const mapGitUser = (res: ApiGitUser): GitUser => ({
  avatarUrl: res["avatar_url"],
  bio: res["bio"],
  blogURL: res["blog"],
  company: res["company"],
  createdAt: res["created_at"],
  email: res["email"],
  eventsURL: res["events_url"],
  followersURL: res["followers_url"],
  followersCount: res["followers"],
  followingURL: res["following_url"],
  followingCount: res["following"],
  gistsURL: res["gists_url"],
  gravatarID: res["gravatar_id"],
  hireable: res["hireable"],
  htmlURL: res["html_url"],
  id: res["id"],
  location: res["location"],
  login: res["login"],
  name: res["name"],
  nodeID: res["node_id"],
  organizationsURL: res["organizations_url"],
  publicGistCount: res["public_gists"],
  publicRepoCount: res["public_repos"],
  receivedEventsURL: res["received_events_url"],
  reposURL: res["repos_url"],
  siteAdmin: res["site_admin"],
  starredURL: res["starred_url"],
  subscriptionsURL: res["subscriptions_url"],
  twitterUsername: res["twitter_username"],
  type: res["type"],
  updatedAt: res["updated_at"],
  url: res["url"],
});
