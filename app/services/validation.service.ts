/*
 * File: /app/services/validation.service.ts
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

export const validateString = (value?: unknown) => {
  if (!value) return false;
  if (typeof value !== "string") return false;
  if (value.length === 0) return false;
  return true;
};

export const validateEmail = (value?: unknown) => {
  if (!validateString(value)) return false;

  // Regex validate email
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(value as string)) return false;

  return true;
};

export const validateRange = (
  value: string | undefined,
  range: [number, number],
) => {
  if (!value) return false;

  const [min, max] = range;
  if (value.length < min) return false;
  if (value.length > max) return false;

  return true;
};
