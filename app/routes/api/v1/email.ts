/*
 * File: /app/routes/api/v1/email.ts
 * Project: portfolio
 * Created: Thursday, 12th January 2023
 * Author: rashadatjou
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { ActionFunction } from "@remix-run/node";

export const loader: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // TODO: Handle post request
  return "";
};
