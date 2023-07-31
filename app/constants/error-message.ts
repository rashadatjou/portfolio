/*
 * File: /app/constants/error-message.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { AppErrorID, AppErrorRecord } from "~/typings/app-error";

// Collection of error
export const ERROR_MESSAGES: AppErrorRecord = {
  [AppErrorID.CLIENT_SIDE_CODE_ONLY_ERROR]: {
    name: "CLIENT_SIDE_CODE_ONLY_ERROR",
    message: "This code is meant to be run only on the client side.",
  },
};
