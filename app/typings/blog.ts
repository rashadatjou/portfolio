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
export type MDXPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

/**
 * MDXModule Meta attribute.
 */
export type MDXModuleMeta = {
  name: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

/**
 * MDXModule for .mdx files
 */
export type MDXModule = {
  filename: string;
  headers: Record<string, string>;
  default: any; // Component
  attributes: {
    meta: MDXModuleMeta;
  };
};
