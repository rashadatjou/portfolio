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
  url: ApiGitUser["url"];
  updatedDate: ApiGitUser["updated_at"];
  createdDate: ApiGitUser["created_at"];
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
  mirror_url: string | null;
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

export type GitRepoLicense = {
  key: ApiGitRepoLicense["key"];
  name: ApiGitRepoLicense["name"];
  url: ApiGitRepoLicense["url"];
  spdxID: ApiGitRepoLicense["spdx_id"];
  nodeID: ApiGitRepoLicense["node_id"];
  htmlURL: ApiGitRepoLicense["html_url"];
};

export type GitRepoOwner = {
  name: ApiGitRepoOwner["name"];
  email: ApiGitRepoOwner["email"];
  login: ApiGitRepoOwner["login"];
  id: ApiGitRepoOwner["id"];
  nodeID: ApiGitRepoOwner["node_id"];
  avatarURL: ApiGitRepoOwner["avatar_url"];
  gravatarID: ApiGitRepoOwner["gravatar_id"];
  url: ApiGitRepoOwner["url"];
  htmlURL: ApiGitRepoOwner["html_url"];
  followersURL: ApiGitRepoOwner["followers_url"];
  followingURL: ApiGitRepoOwner["following_url"];
  gistsURL: ApiGitRepoOwner["gists_url"];
  starredURL: ApiGitRepoOwner["starred_url"];
  subscriptionsURL: ApiGitRepoOwner["subscriptions_url"];
  organizationsURL: ApiGitRepoOwner["organizations_url"];
  reposURL: ApiGitRepoOwner["repos_url"];
  eventsURL: ApiGitRepoOwner["events_url"];
  receivedEventsURL: ApiGitRepoOwner["received_events_url"];
  type: ApiGitRepoOwner["type"];
  siteAdmin: ApiGitRepoOwner["site_admin"];
  starredDate: ApiGitRepoOwner["starred_at"];
};

export type GitRepoInfo = {
  id: ApiGitRepo["id"];
  nodeID: ApiGitRepo["node_id"];
  fullName: ApiGitRepo["full_name"];
  name: ApiGitRepo["name"];
  description: ApiGitRepo["description"];
  homepage: ApiGitRepo["homepage"];
  size: ApiGitRepo["size"];
  language: ApiGitRepo["language"];
  stargazersCount: ApiGitRepo["stargazers_count"];
  watchersCount: ApiGitRepo["watchers_count"];
  forksCount: ApiGitRepo["forks_count"];
  openIssuesCount: ApiGitRepo["open_issues_count"];
  topics: ApiGitRepo["topics"];
  visibility: ApiGitRepo["visibility"];
  watchers: ApiGitRepo["watchers"];
  defaultBranch: ApiGitRepo["default_branch"];
};

export type GitRepoFlag = {
  isPrivate: ApiGitRepo["private"];
  isFork: ApiGitRepo["fork"];
  isArchived: ApiGitRepo["archived"];
  isDisabled: ApiGitRepo["disabled"];
  isTemplate: ApiGitRepo["is_template"];
  hasIssues: ApiGitRepo["has_issues"];
  hasProjects: ApiGitRepo["has_projects"];
  hasDownloads: ApiGitRepo["has_downloads"];
  hasWiki: ApiGitRepo["has_wiki"];
  hasPages: ApiGitRepo["has_pages"];
  hasDiscussions: ApiGitRepo["has_discussions"];
  doesAllowForking: ApiGitRepo["allow_forking"];
  doesRequireWebCommitSignOff: ApiGitRepo["web_commit_signoff_required"];
};

export type GitRepoURL = {
  url: ApiGitRepo["url"];
  htmlURL: ApiGitRepo["html_url"];
  forksURL: ApiGitRepo["forks_url"];
  keysURL: ApiGitRepo["keys_url"];
  mirrorURL: ApiGitRepo["mirror_url"];
  collaboratorsURL: ApiGitRepo["collaborators_url"];
  teamsURL: ApiGitRepo["teams_url"];
  hooksURL: ApiGitRepo["hooks_url"];
  issueEventsURL: ApiGitRepo["issue_events_url"];
  eventsURL: ApiGitRepo["events_url"];
  assigneesURL: ApiGitRepo["assignees_url"];
  branchesURL: ApiGitRepo["branches_url"];
  tagsURL: ApiGitRepo["tags_url"];
  blobsURL: ApiGitRepo["blobs_url"];
  gitTagsURL: ApiGitRepo["git_tags_url"];
  gitRefsURL: ApiGitRepo["git_refs_url"];
  treesURL: ApiGitRepo["trees_url"];
  statusesURL: ApiGitRepo["statuses_url"];
  languagesURL: ApiGitRepo["languages_url"];
  stargazersURL: ApiGitRepo["stargazers_url"];
  contributorsURL: ApiGitRepo["contributors_url"];
  subscribersURL: ApiGitRepo["subscribers_url"];
  subscriptionURL: ApiGitRepo["subscription_url"];
  commitsURL: ApiGitRepo["commits_url"];
  gitCommitsURL: ApiGitRepo["git_commits_url"];
  commentsURL: ApiGitRepo["comments_url"];
  issueCommentURL: ApiGitRepo["issue_comment_url"];
  contentsURL: ApiGitRepo["contents_url"];
  compareURL: ApiGitRepo["compare_url"];
  mergesURL: ApiGitRepo["merges_url"];
  archiveURL: ApiGitRepo["archive_url"];
  downloadsURL: ApiGitRepo["downloads_url"];
  issuesURL: ApiGitRepo["issues_url"];
  pullsURL: ApiGitRepo["pulls_url"];
  milestonesURL: ApiGitRepo["milestones_url"];
  notificationsURL: ApiGitRepo["notifications_url"];
  labelsURL: ApiGitRepo["labels_url"];
  releasesURL: ApiGitRepo["releases_url"];
  deploymentsURL: ApiGitRepo["deployments_url"];
  gitURL: ApiGitRepo["git_url"];
  sshURL: ApiGitRepo["ssh_url"];
  cloneURL: ApiGitRepo["clone_url"];
  svnURL: ApiGitRepo["svn_url"];
};

export type GitRepoDate = {
  createdDate: ApiGitRepo["created_at"];
  updatedDate: ApiGitRepo["updated_at"];
  pushedDate: ApiGitRepo["pushed_at"];
};

export type GitRepo = {
  info: GitRepoInfo;
  flags: GitRepoFlag;
  urls: GitRepoURL;
  dates: GitRepoDate;
  license: GitRepoLicense | null;
  owner: GitRepoOwner | null;
  permissions: ApiGitRepoPermissions;
};
