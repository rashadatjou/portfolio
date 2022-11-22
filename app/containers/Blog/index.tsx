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
type ArticleProps = {
  post: Post;
};

type Props = {
  postList: Post[];
};

// - Components
const Article = ({ post }: ArticleProps) => (
  <li key={post.slug}>
    <Link to={post.slug}>
      <h1>{post.title}</h1>
    </Link>
    {post.description ? <p>{post.description}</p> : null}
    <span>{post.date}</span>
    <div>
      {post.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
  </li>
);

const BlogContainer = ({ postList }: Props) => {
  return (
    <div className="blog__container">
      <ul>
        {postList.map((post) => (
          <Article post={post} />
        ))}
      </ul>
    </div>
  );
};

// - Exports
export default BlogContainer;
