/*
 * File: /app/containers/Blog/index.tsx
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import blogCssPath from "~/styles/container/blog.css";

import type { Post } from "~/typings/blog";
import type { LinkDescriptor } from "@remix-run/node";

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
  <li className="blog__article">
    <Link to={post.slug}>
      <h1 className="title">{post.title}</h1>
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
      <ul className="blog__list">
        {postList.map((post) => (
          <Article key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
};

// - Exports
export default BlogContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: blogCssPath },
];
