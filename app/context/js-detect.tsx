/*
 * File: /app/context/js-detect.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type {
  JsDetectContext,
  JsDetectContextDispatch,
  JsDetectContextState,
} from "~/typings/js-detect";
import type { Context, PropsWithChildren } from "react";

import { createContext, useState, useContext } from "react";

// - Type
type ProviderProp = PropsWithChildren<{
  defaultValue: boolean;
}>;

// - Context
const defaultState: JsDetectContext = [{ jsEnabled: true }, {}];
const Context = createContext(defaultState);

// - Provider
const JsDetectProvider = ({ children, defaultValue = true }: ProviderProp) => {
  const [enabled, setEnabled] = useState(defaultValue);

  // Actions
  const onToggle = (newValue: boolean) => {
    setEnabled(newValue);
  };

  // Combine
  const state: JsDetectContextState = { jsEnabled: enabled };
  const dispatch: JsDetectContextDispatch = { toggleJs: onToggle };
  const value: JsDetectContext = [state, dispatch];

  return <Context.Provider value={value} children={children} />;
};

// - Hook
const useJsDetect = (): JsDetectContext => useContext(Context);

// - Exports
export { JsDetectProvider, useJsDetect };
