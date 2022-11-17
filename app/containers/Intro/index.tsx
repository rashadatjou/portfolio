/*
 * File: /app/containers/Intro/index.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import introCssPath from "~/styles/container/intro.css";
import buttonCssPath from "~/styles/element/button.css";
import modalCssPath from "~/styles/element/modal.css";

import { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Settings from "./element/Settings";

// - Components
const Navbar = () => (
  <div className="intro__menu">
    <ul className="intro__menu-list">
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const IntroContainer = () => {
  return (
    <div className="intro">
      <Settings />
      <h1>Hello, My name is Mehdi 👋🏽</h1>
      <p>Check out the options bellow for more info 👇🏽</p>
      <Navbar />
    </div>
  );
};

// - Exports
export default IntroContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: introCssPath },
  { rel: "stylesheet", href: buttonCssPath },
  { rel: "stylesheet", href: modalCssPath },
];
