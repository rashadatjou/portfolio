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

import { prettyPrintDate } from "~/utils/date";
import { useTranslation } from "react-i18next";

// - Types
type ArticleProps = {
  post: Post;
  locale: string;
};

type Props = {
  postList: Post[];
};

// - Components
const Article = ({ post, locale }: ArticleProps) => (
  <li className="blog__article">
    <Link to={post.slug}>
      <h1 className="title">{post.title}</h1>

      {post.description ? (
        <p className="description">{post.description}</p>
      ) : null}
    </Link>

    <time className="date" dateTime={post.date}>
      {prettyPrintDate(post.date, locale)}
    </time>

    <div className="tag__container">
      {post.tags.map((tag) => (
        <Link key={tag} className="tag" to={`?tag=${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  </li>
);

const BlogContainer = ({ postList }: Props) => {
  const { i18n } = useTranslation();

  return (
    <div className="blog__container">
      <ul className="blog__list">
        {postList.map((post) => (
          <Article key={post.slug} post={post} locale={i18n.resolvedLanguage} />
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
