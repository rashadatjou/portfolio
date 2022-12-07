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
import Tooltip from "~/components/Tooltip";

// - Types
type Props = {
  userData?: GitUser;
};

// - Components
const AboutView = ({ userData }: Props) => {
  return (
    <div className="about">
      <NavHeader position="relative">
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="about__content">
        <div className="profile">
          <img
            className="image"
            src={userData?.avatar_url}
            alt="Profile image"
          />
          <h2 className="title">{userData?.name}</h2>
          <p className="bio">{userData?.bio}</p>
          <ul className="stat-list">
            <li>
              <Tooltip position="left" text="Public repos">
                <p className="stat">{userData?.public_repos}</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip position="bottom" text="Git Followers">
                <p className="stat">{userData?.followers}</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip position="right" text="Public gists">
                <p className="stat">{userData?.public_gists}</p>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects"></div>
    </div>
  );
};

// - Exports
export default AboutView;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: aboutCSSPath },
  { rel: "stylesheet", href: buttonCSSPaths },
  { rel: "stylesheet", href: headerCSSPaths },
  { rel: "stylesheet", href: tooltipCSSPaths },
];
