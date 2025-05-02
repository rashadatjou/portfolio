/*
 * File: /app/views/Main/index.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

import introCssPath from "~/styles/views/intro.css";
import buttonCssPath from "~/styles/element/button.css";
import modalCssPath from "~/styles/element/modal.css";
import formCssPath from "~/styles/element/form.css";
import switchCssPath from "~/styles/element/switch.css";
import linkListCssPath from "~/styles/element/link-list.css";

import { LinkDescriptor } from "@remix-run/cloudflare";
import { useTranslation } from "react-i18next";

import Settings from "./element/Settings";
import LinkList, { LinkListItem } from "~/components/LinkList";
import Footer from "~/views/Intro/element/Footer";
import MovedDiscloser from "~/components/MovedDiscloser";

// - Const
const sourceCodeData: LinkListItem = {
  name: "intro.source.code",
  href: "https://github.com/rashadatjou/portfolio",
};

const linkListData: LinkListItem[] = [
  { name: "intro.link.1", href: "/blog" },
  { name: "intro.link.2", href: "mailto:daniel.reshad@proton.me" },
  { name: "intro.link.3", href: "/about" },
];

// - Components
const IntroView = () => {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <Settings />
      <div className="intro-content">
        <LinkList translate={t} buttonLike data={linkListData} />
        <MovedDiscloser />
      </div>
      <Footer title={t(sourceCodeData.name)} href={sourceCodeData.href} />
    </div>
  );
};

// - Exports
export default IntroView;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: buttonCssPath },
  { rel: "stylesheet", href: modalCssPath },
  { rel: "stylesheet", href: formCssPath },
  { rel: "stylesheet", href: switchCssPath },
  { rel: "stylesheet", href: linkListCssPath },
  { rel: "stylesheet", href: introCssPath },
];
