/*
 * File: /app/routes/post/route.tsx
 * Project: portfolio
 * Created: Thursday, 16th November 2023
 * Author: rashadatjou
 * -----
 * Copyright 2023, ©Mehdi Rashadatjou
 * -----
 */

import postCSSPath from "~/styles/views/post.css";
import buttonCSSPath from "~/styles/element/button.css";
import headerCSSPath from "~/styles/element/header.css";

import type { LinksFunction } from "@remix-run/cloudflare";

import { Outlet } from "@remix-run/react";
import Button from "~/components/Button";
import NavHeader from "~/components/Header";

// - Route API
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
