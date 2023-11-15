/*
 * File: /app/routes/blog/$.tsx
 * Project: portfolio
 * Created: Saturday, 3rd December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import postCSSPath from "~/styles/views/post.css";
import buttonCSSPath from "~/styles/element/button.css";
import headerCSSPath from "~/styles/element/header.css";

import type { LinksFunction } from "@remix-run/cloudflare";

import { Outlet } from "@remix-run/react";
import Button from "~/components/Button";
import NavHeader from "~/components/Header";

// - Types
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: postCSSPath },
    { rel: "stylesheet", href: buttonCSSPath },
    { rel: "stylesheet", href: headerCSSPath },
  ];
};

// - Components
const Header = () => (
  <NavHeader>
    <Button buttonType="icon" bordered href="/blog" shadow>
      👈🏽
    </Button>
  </NavHeader>
);

const Posts = () => {
  return (
    <div className="post">
      <Header />
      <div className="post__wrapper">
        <Outlet />
      </div>
    </div>
  );
};

// - Exports
export default Posts;
