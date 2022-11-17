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
import formCssPath from "~/styles/element/form.css";

import { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Settings from "./element/Settings";
import { useTranslation, TFunction } from "react-i18next";

// - Types
type NavbarProps = {
  t: TFunction<"translation", undefined>;
};

// - Components
const Navbar = ({ t }: NavbarProps) => (
  <div className="intro__menu">
    <ul className="intro__menu-list">
      <li>
        <Link to="/blog">{t("intro.link.1")}</Link>
      </li>
      <li>
        <Link to="/contact">{t("intro.link.2")}</Link>
      </li>
      <li>
        <Link to="/about">{t("intro.link.3")}</Link>
      </li>
    </ul>
  </div>
);

const IntroContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <Settings />
      <h1>{t("intro.title")}</h1>
      <p>{t("intro.body")}</p>
      <Navbar t={t} />
    </div>
  );
};

// - Exports
export default IntroContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: introCssPath },
  { rel: "stylesheet", href: buttonCssPath },
  { rel: "stylesheet", href: modalCssPath },
  { rel: "stylesheet", href: formCssPath },
];
