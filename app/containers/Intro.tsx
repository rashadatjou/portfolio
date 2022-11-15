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
