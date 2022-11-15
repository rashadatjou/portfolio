/*
 * File: /app/typings/js-detect.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { ContextResult } from "./context";

export type JsDetectContextState = {
  jsEnabled: boolean;
};

export type JsDetectContextDispatch = {
  toggleJs: (value: boolean) => void;
};

export type JsDetectContext = ContextResult<
  JsDetectContextState,
  JsDetectContextDispatch
>;
