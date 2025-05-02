/*
 * File: /app/typings/context.ts
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

/// Global action convection
export type ContextAction<T> = { type: string; payload: { [key: string]: T } };

/// Global context result convection
export type ContextResult<T, K> = [state: Partial<T>, dispatch: Partial<K>];
