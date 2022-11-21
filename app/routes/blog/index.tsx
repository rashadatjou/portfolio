/*
 * File: /app/routes/blog/index.tsx
 * Project: portfolio
 * Created: Sunday, 20th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as blogPosts from "./__posts/posts";

// - Types
type Props = {};

// - Helpers
function postFromModule(module: any) {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    ...module.attributes.meta,
  };
}

// - Route Module API
export async function loader() {
  const allPosts = Object.values(blogPosts);
  return json(allPosts.map(postFromModule));
}

// - Component
export default function BlogRoute({}: Props) {
  const posts = useLoaderData<any[]>();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>
            <h1>{post.title}</h1>
          </Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
