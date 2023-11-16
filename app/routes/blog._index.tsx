/*
 * File: /app/routes/blog/index.tsx
 * Project: portfolio
 * Created: Sunday, 20th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction, LoaderArgs } from "@remix-run/cloudflare";
import type { MDXModule, MDXPost } from "~/typings/blog";

import { json } from "@remix-run/cloudflare";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import BlogView, { links as blogLinks } from "~/views/Blog";

import blogList from "~/blogs";

// - Helpers
function postFromModule(module: MDXModule): MDXPost {
  const { attributes, filename } = module;
  const { meta } = attributes;
  const name = filename.replace(/\.mdx?$/, "");
  return {
    slug: `${name}`,
    ...meta,
  };
}

// - Route Module API
export async function loader({}: LoaderArgs) {
  return json(blogList.map(postFromModule));
}

export const links: LinksFunction = () => {
  return [...blogLinks];
};

// - Component
export default function BlogRoute() {
  const posts = useLoaderData<MDXPost[]>();
  const [searchParams] = useSearchParams();
  const tagSearch = searchParams.get("tag");

  return <BlogView postList={posts} tag={tagSearch} />;
}
