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
import btnCssPath from "~/styles/element/button.css";

import type { MDXPost } from "~/typings/blog";
import type { LinkDescriptor } from "@remix-run/node";

import { Link } from "@remix-run/react";

import { prettyPrintDate } from "~/utils/date";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";

// - Types
type PostItemProps = {
  post: MDXPost;
  locale: string;
};

type HeaderProps = {
  tag?: string | null;
};

type Props = {
  postList: MDXPost[];
  tag?: string | null;
};

// - Functions
function postFiltered(allPosts: MDXPost[], tag?: string | null) {
  if (tag && typeof tag === "string") {
    return allPosts.filter((post) => post.tags.includes(tag));
  }

  return allPosts;
}

// - Components
const PostItem = ({ post, locale }: PostItemProps) => (
  <li className="blog__post">
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

const BlogHeader = ({ tag }: HeaderProps) => (
  <div className="blog__header">
    <Button buttonType="icon" bordered href="/">
      👈🏽
    </Button>
    {tag && (
      <Button buttonType="secondary" bordered href="?">
        Clear tag
      </Button>
    )}
  </div>
);

const BlogContainer = ({ postList, tag }: Props) => {
  const { i18n } = useTranslation();

  return (
    <div className="blog__container">
      <BlogHeader tag={tag} />
      <ul className="blog__list">
        {postFiltered(postList, tag).map((post) => (
          <PostItem key={post.slug} post={post} locale={i18n.resolvedLanguage} />
        ))}
      </ul>
    </div>
  );
};

// - Exports
export default BlogContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: blogCssPath },
  { rel: "stylesheet", href: btnCssPath },
];
