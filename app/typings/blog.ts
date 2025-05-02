/*
 * File: /app/typings/blog.ts
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
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
