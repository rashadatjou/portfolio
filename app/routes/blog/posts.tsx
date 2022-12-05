/*
 * File: /app/routes/blog/$.tsx
 * Project: portfolio
 * Created: Saturday, 3rd December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import postCSSPath from "~/styles/container/blog-post.css";

// - Types
// type Props = {};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: postCSSPath }];
};

// - Components
const Posts = () => {
  return (
    <div className="post__container">
      <Outlet />
    </div>
  );
};

// - Exports
export default Posts;
