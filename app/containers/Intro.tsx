/*
 * File: index.tsx
 * Project: Portfolio 3.0
 * Created: Monday, 26th September 2022
 * -----
 * Copyright 2022, ©Denpex
 * -----
 */

import { LinkDescriptor } from "@remix-run/node";
import ButtonPrimary, {
  links as buttonLinks,
} from "~/components/button/ButtonPrimary";

import introCssPath from "~/styles/container/intro.css";

// - Components
const IntroContainer = () => {
  return (
    <div className="intro_container">
      <h1>Hello, My name is Mehdi 👋🏽</h1>
      <span>
        To start, <u>try</u> pressing the button bellow 👇🏽
      </span>
      <form action="get">
        <ButtonPrimary className="intro-container__action-button">
          Start
        </ButtonPrimary>
      </form>
    </div>
  );
};

// - Exports
export default IntroContainer;
export const links: LinkDescriptor[] = [
  ...buttonLinks,
  { rel: "stylesheet", href: introCssPath },
];
