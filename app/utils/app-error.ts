/*
 * File: /app/utils/app-error.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { AppErrorID, AppErrorType } from "~/typings/app-error";
import { ERROR_MESSAGES } from "~/constants/error-message";

export default class AppError extends Error {
  id: AppErrorID;
  type: AppErrorType;

  constructor(id: AppErrorID, type?: AppErrorType) {
    const errorType = type ?? AppErrorType.Universal;
    const errorBody = ERROR_MESSAGES[id];
    const message = `
    :::
    ID: ${id}
    Type: ${errorType}

    ${errorBody.message}
    :::
    `;

    super(message);
    this.name = errorBody.name;
    this.id = id;
    this.type = type ?? AppErrorType.Universal;
  }
}
