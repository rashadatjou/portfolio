/*
 * File: /app/views/About/index.tsx
 * Project: portfolio
 * Created: Tuesday, 6th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import aboutCSSPath from "~/styles/views/about.css";
import buttonCSSPaths from "~/styles/element/button.css";
import headerCSSPaths from "~/styles/element/header.css";

import type { LinkDescriptor } from "@remix-run/node";

import Button from "~/components/Button";
import NavHeader from "~/components/Header";

// - Types
type Props = {};

// - Components
const AboutView = ({}: Props) => {
  return (
    <div className="about">
      <NavHeader position="relative">
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="features-wrapper">
        <div className="feature">
          <h2>Projects:</h2>
          <ul className="grid-projects">
            <li className="card">1</li>
            <li className="card">2</li>
            <li className="card">3</li>
            <li className="card">4</li>
          </ul>
        </div>
        <div className="feature">
          <h2>Resumes/CVs:</h2>
        </div>
        <div className="feature">
          <h2>Links:</h2>
        </div>
      </div>
    </div>
  );
};

// - Exports
export default AboutView;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: aboutCSSPath },
  { rel: "stylesheet", href: buttonCSSPaths },
  { rel: "stylesheet", href: headerCSSPaths },
];
