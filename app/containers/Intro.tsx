/*
 * File: /app/containers/Intro.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import introCssPath from "~/styles/container/intro.css";

import { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";

// - Components
const Settings = () => {
  return (
    <div className="intro__settings">
      <button className="intro__setting-action">⚙️</button>
    </div>
  );
};

const Menu = () => {
  return (
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
};

const IntroContainer = () => {
  return (
    <div className="intro">
      <Settings />
      <h1>Hello, My name is Mehdi 👋🏽</h1>
      <span>Check out the options bellow for more info 👇🏽</span>
      <Menu />
    </div>
  );
};

// - Exports
export default IntroContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: introCssPath },
];
