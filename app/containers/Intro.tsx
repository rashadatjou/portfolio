/*
 * File: /app/containers/Intro.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { LinkDescriptor } from "@remix-run/node";
import introCssPath from "~/styles/container/intro.css";

// - Components
const Menu = () => {
  return (
    <div className="intro__menu">
      <ul className="intro__menu-list">
        <li>Blog</li>
        <li>Contact</li>
        <li>Theme</li>
        <li>Language</li>
      </ul>
    </div>
  );
};

const IntroContainer = () => {
  return (
    <div className="intro">
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
