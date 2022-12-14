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
import tooltipCSSPaths from "~/styles/element/tooltip.css";
import linkListCSSPaths from "~/styles/element/link-list.css";
import cardCSSPaths from "~/styles/element/card.css";
import loaderCSSPaths from "~/styles/element/loader.css";

import type { LinkDescriptor } from "@remix-run/node";
import type { GitUser } from "~/typings/git";

import { Outlet, useTransition } from "@remix-run/react";

import Button from "~/components/Button";
import NavHeader from "~/components/Header";
import LinkList, { LinkListItem } from "~/components/LinkList";
import Profile from "./elements/profile";

// - Types
type Props = {
  gitUser?: GitUser;
};

// - Const
const linkListData: LinkListItem[] = [
  { name: "Projects", href: "projects" },
  { name: "Resume/CV", href: "resume" },
  { name: "Links", href: "links" },
];

// - Components
const AboutView = ({ gitUser }: Props) => {
  const { state } = useTransition();
  return (
    <div className="about">
      <NavHeader position="relative">
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="about__content">
        <Profile
          name={gitUser?.name}
          avatarUrl={gitUser?.avatarUrl}
          publicGistCount={gitUser?.publicGistCount}
          publicRepoCount={gitUser?.publicRepoCount}
          followersCount={gitUser?.followersCount}
          bio={gitUser?.bio}
        />
        <LinkList size="normal" buttonLike data={linkListData} />
        {state === "loading" && <div className="loader" />}
        <Outlet />
      </div>
    </div>
  );
};

// - Exports
export default AboutView;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: buttonCSSPaths },
  { rel: "stylesheet", href: headerCSSPaths },
  { rel: "stylesheet", href: tooltipCSSPaths },
  { rel: "stylesheet", href: linkListCSSPaths },
  { rel: "stylesheet", href: loaderCSSPaths },
  { rel: "stylesheet", href: cardCSSPaths },
  { rel: "stylesheet", href: aboutCSSPath },
];
