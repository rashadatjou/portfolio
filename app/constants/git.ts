/*
 * File: /app/routes/api/v1/git/config.ts
 * Project: portfolio
 * Created: Thursday, 8th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

export const BASE_URL = process.env.GIT_API_URL ?? "";
export const API_TOKEN = process.env.GIT_API_TOKEN ?? "";
export const API_VERSION = process.env.GIT_API_VERSION ?? "";

export const HTTP_HEADERS = new Headers({
  Accept: "application/vnd.github+json",
  Authorization: `token ${API_TOKEN}`,
  "X-GitHub-Api-Version": API_VERSION,
});
