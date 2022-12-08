/*
 * File: /app/typings/git.ts
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

export type ApiGitUser = {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers_url: string;
  followers: number;
  following_url: string;
  following: number;
  gists_url: string;
  gravatar_id: string | null;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
};

export type GitUser = {
  avatarUrl: ApiGitUser["avatar_url"];
  bio: ApiGitUser["bio"];
  blogURL: ApiGitUser["blog"];
  company: ApiGitUser["company"];
  createdAt: ApiGitUser["created_at"];
  email: ApiGitUser["email"];
  eventsURL: ApiGitUser["events_url"];
  followersURL: ApiGitUser["followers_url"];
  followersCount: ApiGitUser["followers"];
  followingURL: ApiGitUser["following_url"];
  followingCount: ApiGitUser["following"];
  gistsURL: ApiGitUser["gists_url"];
  gravatarID: ApiGitUser["gravatar_id"];
  hireable: ApiGitUser["hireable"];
  htmlURL: ApiGitUser["html_url"];
  id: ApiGitUser["id"];
  location: ApiGitUser["location"];
  login: ApiGitUser["login"];
  name: ApiGitUser["name"];
  nodeID: ApiGitUser["node_id"];
  organizationsURL: ApiGitUser["organizations_url"];
  publicGistCount: ApiGitUser["public_gists"];
  publicRepoCount: ApiGitUser["public_repos"];
  receivedEventsURL: ApiGitUser["received_events_url"];
  reposURL: ApiGitUser["repos_url"];
  siteAdmin: ApiGitUser["site_admin"];
  starredURL: ApiGitUser["starred_url"];
  subscriptionsURL: ApiGitUser["subscriptions_url"];
  twitterUsername: ApiGitUser["twitter_username"];
  type: ApiGitUser["type"];
  updatedAt: ApiGitUser["updated_at"];
  url: ApiGitUser["url"];
};
