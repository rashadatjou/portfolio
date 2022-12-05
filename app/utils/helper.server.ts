/*
 * File: /app/utils/helper.server.ts
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { json } from "@remix-run/node";

export const badRequest = <T>(data: T) => json(data, { status: 400 });
