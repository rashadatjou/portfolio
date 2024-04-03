/*
 * File: /app/views/Main/index.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import introCssPath from "~/styles/views/intro.css";
import buttonCssPath from "~/styles/element/button.css";
import modalCssPath from "~/styles/element/modal.css";
import formCssPath from "~/styles/element/form.css";
import switchCssPath from "~/styles/element/switch.css";
import linkListCssPath from "~/styles/element/link-list.css";

import { LinkDescriptor } from "@remix-run/cloudflare";

import Settings from "./element/Settings";
import LinkList, { LinkListItem } from "~/components/LinkList";
import { useTranslation } from "react-i18next";
import Footer from "~/views/Intro/element/Footer";
import { TFunction } from "i18next";

// - Types
type IntroHelloProps = {
  translate?: TFunction<"translation", undefined>;
};

// - Const
const sourceCodeData: LinkListItem = {
  name: "intro.source.code",
  href: "https://github.com/rashadatjou/portfolio",
};

const linkListData: LinkListItem[] = [
  { name: "intro.link.1", href: "/blog" },
  { name: "intro.link.2", href: "mailto:mehdi@rashadatjou.com" },
  { name: "intro.link.3", href: "/about" },
];

// - Components
const IntroHello = ({ translate }: IntroHelloProps) => (
  <>
    <h1>👋🏽</h1>
    <h1>{translate?.("intro.title")}</h1>
    <p>{translate?.("intro.summary")}</p>
  </>
);

const IntroView = () => {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <Settings />
      <div className="intro-content">
        <IntroHello translate={t} />
        <LinkList translate={t} buttonLike data={linkListData} />
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
