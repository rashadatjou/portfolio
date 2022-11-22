/*
 * File: /app/routes/blog/index.tsx
 * Project: portfolio
 * Created: Sunday, 20th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { MDXModule, Post } from "~/typings/blog";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import * as blogPosts from "./__posts/posts";
import BlogContainer from "~/containers/Blog";



// - Helpers
function postFromModule(module: MDXModule): Post {
  console.log("module", module);
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    ...module.attributes.meta,
  };
}

// - Route Module API
export async function loader() {
  const allPosts = Object.values(blogPosts);
  return json(allPosts.map(postFromModule as any));
}

// - Component
export default function BlogRoute() {
  const posts = useLoaderData<Post[]>();
  return <BlogContainer postList={posts} />;
}
