/*
 * File: /app/typings/git.ts
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/// USER
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

/// REPOS
export type ApiGitRepoLicense = {
  key: string;
  name: string;
  url: string | null;
  spdx_id: string | null;
  node_id: string;
  html_url: string;
};

export type ApiGitRepoOwner = {
  name: string | null;
  email: string | null;
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at: string;
};

export type ApiGitRepoPermissions = {
  admin: boolean;
  pull: boolean;
  triage: boolean;
  push: boolean;
  maintain: boolean;
};

export type ApiGitRepo = {
  // info
  id: number;
  node_id: string;
  full_name: string;
  name: string;
  description: string | null;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number; // same thing as forks ??
  forks: number; // same this as forks_count ??
  mirror_url: string | null;
  open_issues_count: number;
  topics: string[];
  visibility: "public" | "private" | "internal";
  watchers: number;
  // flags
  private: boolean;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  default_branch: string;
  // urls
  url: string;
  html_url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  // dates
  created_at: string | null;
  updated_at: string | null;
  pushed_at: string | null;
  // objects
  license: ApiGitRepoLicense | null;
  owner: ApiGitRepoOwner | null;
  permissions: ApiGitRepoPermissions;
};
