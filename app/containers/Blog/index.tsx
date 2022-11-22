/*
 * File: /app/containers/Blog/index.tsx
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { Post } from "~/typings/blog";
import { Link } from "@remix-run/react";

// - Types
type Props = {
  postList: Post[];
};

// - Components
const BlogContainer = ({ postList }: Props) => {
  return (
    <ul>
      {postList.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>
            <h1>{post.title}</h1>
          </Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
};

// - Exports
export default BlogContainer;
