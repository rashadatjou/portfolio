/*
 * File: /app/routes/blog/index.tsx
 * Project: portfolio
 * Created: Sunday, 20th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import type { MDXModule, Post } from "~/typings/blog";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import blogPosts from "./__posts/posts";
import BlogContainer, { links as blogLinks } from "~/containers/Blog";
import { getLocale } from "~/services/i18n/i18n.server";

// - Helpers
function postFromModule(module: MDXModule): Post {
  return {
    slug: `${module.attributes.meta.name}/${module.filename.replace(/\.mdx?$/, "")}`,
    ...module.attributes.meta,
  };
}

// - Route Module API
export async function loader({ request }: LoaderArgs) {
  const locale = await getLocale(request);
  const localizedBlogs = blogPosts.map((item: any) => item[locale]);
  return json(localizedBlogs.map((blog) => postFromModule(blog as any)));
}

export const links: LinksFunction = () => {
  return [...blogLinks];
};

// - Component
export default function BlogRoute() {
  const posts = useLoaderData<Post[]>();
  return <BlogContainer postList={posts} />;
}
