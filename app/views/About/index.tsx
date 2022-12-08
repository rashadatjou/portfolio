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

import type { LinkDescriptor } from "@remix-run/node";
import type { GitUser } from "~/typings/git";

import Button from "~/components/Button";
import NavHeader from "~/components/Header";
import Profile from "./element/Profile";
import Projects from "./element/Projects";

// - Types
type Props = {
  gitUser?: GitUser;
};

// - Components
const AboutView = ({ gitUser }: Props) => (
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
      <Projects />
    </div>
  </div>
);

// - Exports
export default AboutView;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: aboutCSSPath },
  { rel: "stylesheet", href: buttonCSSPaths },
  { rel: "stylesheet", href: headerCSSPaths },
  { rel: "stylesheet", href: tooltipCSSPaths },
];
