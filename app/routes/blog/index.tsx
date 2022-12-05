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
import type { MDXModule, MDXPost } from "~/typings/blog";

import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import blogModules from "~/constants/blog-list";
import BlogContainer, { links as blogLinks } from "~/containers/Blog";
import { getLocale } from "~/services/i18n/i18n.server";

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
  const localizedBlogs = blogModules.map((module: any) =>
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

  return <BlogContainer postList={posts} tag={tagSearch} />;
}
