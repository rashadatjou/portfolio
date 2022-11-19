/*
 * File: /app/services/storage.service.ts
 * Project: portfolio
 * Created: Saturday, 19th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import * as StorageKeys from "~/constants/storage-key";
import AppError from "~/utils/app-error";
import { AppErrorID, AppErrorType } from "~/typings/app-error";
import { isServerSide } from "~/utils/client-helper";

class StorageService {
  save(key: keyof typeof StorageKeys, value: string) {
    if (isServerSide()) {
      return;
    }

    if (!window) {
      throw new Error("No Window object found.");
    }

    localStorage.setItem(StorageKeys[key], value);
  }

  get(key: keyof typeof StorageKeys): string | null {
    if (isServerSide()) {
      return null;
    }

    if (!window) {
      throw new Error("No Window object found.");
    }

    return localStorage.getItem(StorageKeys[key]);
  }
}

// - Instance
const storageService = new StorageService();

// - Export
export default storageService;
