/*
 * File: /app/typings/blog.ts
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/**
 * Describes a Post object
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

/**
 * MDXModule found in routes/__posts/
 *
 * Note:
 * Attributes may vary
 */
export type MDXModule = {
  filename: string;
  headers: Record<string, string>;
  default: any; // Component
  attributes: {
    meta: {
      name: string;
      title: string;
      description: string;
      tags: string[];
      date: string;
    };
  };
};
