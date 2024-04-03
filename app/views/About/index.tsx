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

import type { LinkDescriptor } from "@remix-run/cloudflare";
import type { GitUser } from "~/typings/git";

import { Outlet, useNavigation } from "@remix-run/react";

import Button from "~/components/Button";
import NavHeader from "~/components/Header";
import LinkList, { LinkListItem } from "~/components/LinkList";
import Profile from "./elements/profile";
import { useTranslation } from "react-i18next";
import profilePictureRoute from "~/assets/profile.png";

// - Types
type Props = {
  gitUser?: GitUser;
};

// - Const
const linkListData: LinkListItem[] = [
  { name: "about.link.0", href: "projects" },
  // { name: "about.link.1", href: "downloads" },
  { name: "about.link.2", href: "links" },
];

// - Components
const AboutView = ({ gitUser }: Props) => {
  const { state } = useNavigation();
  const { t } = useTranslation();

  return (
    <div className="about">
      <NavHeader position="relative">
        <Button buttonType="icon" href="/" bordered shadow>
          👈🏽
        </Button>
      </NavHeader>
      <div className="about__content">
        <Profile
          name={gitUser?.name}
          avatarUrl={profilePictureRoute}
          publicGistCount={gitUser?.publicGistCount}
          publicRepoCount={gitUser?.publicRepoCount}
          followersCount={gitUser?.followersCount}
          bio={t("about.profile.bio")}
          translate={t}
        />
        <LinkList size="normal" buttonLike data={linkListData} translate={t} />
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
