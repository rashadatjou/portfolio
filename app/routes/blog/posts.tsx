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

import type { LinksFunction } from "@remix-run/node";

import { Outlet } from "@remix-run/react";
import Button from "~/components/Button";
import NavHeader from "~/components/NavHeader";

// - Types
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: postCSSPath },
    { rel: "stylesheet", href: buttonCSSPath },
  ];
};

// - Components
const Header = () => (
  <NavHeader>
    <Button buttonType="icon" bordered href="/blog">
      👈🏽
    </Button>
  </NavHeader>
);

const Posts = () => {
  return (
    <div className="post__container">
      <Header />
      <Outlet />
    </div>
  );
};

// - Exports
export default Posts;
