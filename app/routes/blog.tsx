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
import { getLocale } from "~/services/i18n/i18n.server";

import BlogView, { links as blogLinks } from "~/views/Blog";

const blogList: any[] = [];

// - Helpers
function postFromModule(module: MDXModule): MDXPost {
  const { attributes, filename } = module;
  const { meta } = attributes;
  const locale = filename.replace(/\.mdx?$/, "");
  return {
    slug: `posts/${meta.name}/${locale}`,
    ...meta,
  };
}

function getLocalizedModule(locale: string, module: Record<string, MDXModule>) {
  if (module?.[locale]) {
    return module[locale];
  }

  // Default english
  return module.en;
}

// - Route Module API
export async function loader({ request }: LoaderArgs) {
  const locale = await getLocale(request);
  const localizedBlogs = blogList.map((module: any) =>
    getLocalizedModule(locale, module),
  );
  return json(localizedBlogs.map(postFromModule));
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
