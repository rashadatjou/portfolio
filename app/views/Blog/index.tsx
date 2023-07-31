/*
 * File: /app/views/Blog/index.tsx
 * Project: portfolio
 * Created: Tuesday, 22nd November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import blogCssPath from "~/styles/views/blog.css";
import btnCssPath from "~/styles/element/button.css";
import tagCssPath from "~/styles/element/tag.css";
import headerCssPath from "~/styles/element/header.css";

import type { MDXPost } from "~/typings/blog";
import type { LinkDescriptor } from "@remix-run/cloudflare";
import type { NavigateFunction } from "@remix-run/react";

import { Link, useNavigate } from "@remix-run/react";

import { prettyPrintDate } from "~/utils/date";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import NavHeader from "~/components/Header";

// - Types
type PostItemProps = {
  post: MDXPost;
  locale: string;
  navigate: NavigateFunction;
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
const PostItem = ({ post, locale, navigate }: PostItemProps) => (
  <li className="blog__post">
    <div className="blog__post-container" onClick={() => navigate(post.slug)}>
      <h1 className="title">{post.title}</h1>

      {post.description ? (
        <p className="description">{post.description}</p>
      ) : null}

      <time className="date" dateTime={post.date}>
        {prettyPrintDate(post.date, locale)}
      </time>
    </div>
    <div className="tag__container">
      {post.tags.map((tag) => (
        <Link key={tag} className="tag" to={`?tag=${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  </li>
);

const BlogHeader = () => (
  <NavHeader position="relative">
    <Button buttonType="icon" bordered href="/">
      👈🏽
    </Button>
  </NavHeader>
);

const BlogContainer = ({ postList, tag }: Props) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="blog__container">
      <BlogHeader />
      <div className="blog__wrapper">
        <ul className="blog__list">
          {postFiltered(postList, tag).map((post) => (
            <PostItem
              key={post.slug}
              post={post}
              locale={i18n.resolvedLanguage}
              navigate={navigate}
            />
          ))}
        </ul>
      </div>
      {tag && (
        <Button
          className="blog__btn-clear-filter"
          capsule
          buttonType="primary"
          href="?">
          {t?.("clear.filter") ?? "Clear tag"}
        </Button>
      )}
    </div>
  );
};

// - Exports
export default BlogContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: blogCssPath },
  { rel: "stylesheet", href: btnCssPath },
  { rel: "stylesheet", href: tagCssPath },
  { rel: "stylesheet", href: headerCssPath },
];
