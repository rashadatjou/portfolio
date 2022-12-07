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
type ProfileProps = {
  name?: GitUser["name"];
  avatarUrl?: GitUser["avatar_url"];
  bio?: GitUser["bio"];
  publicRepos?: GitUser["public_repos"];
  followers?: GitUser["followers"];
  publicGists?: GitUser["public_gists"];
};

type Props = {
  userData?: GitUser;
};

// - Components
const Profile = ({
  name,
  avatarUrl,
  bio,
  publicRepos,
  followers,
  publicGists,
}: ProfileProps) => (
  <div className="profile">
    <img className="image" src={avatarUrl} alt="Profile image" />
    <h2 className="title">{name}</h2>
    <p className="bio">{bio}</p>
    <ul className="stat-list">
      <li>
        <Tooltip alwaysOn position="left" text="Public repos">
          <p className="stat">{publicRepos}</p>
        </Tooltip>
      </li>
      <li>
        <Tooltip alwaysOn position="bottom" text="Git Followers">
          <p className="stat">{followers}</p>
        </Tooltip>
      </li>
      <li>
        <Tooltip alwaysOn position="right" text="Public gists">
          <p className="stat">{publicGists}</p>
        </Tooltip>
      </li>
    </ul>
  </div>
);

const AboutView = ({ userData }: Props) => {
  return (
    <div className="about">
      <NavHeader position="relative">
        <Button buttonType="icon" href="/" bordered>
          👈🏽
        </Button>
      </NavHeader>
      <div className="about__content">
        <Profile
          name={userData?.name}
          avatarUrl={userData?.avatar_url}
          publicGists={userData?.public_gists}
          publicRepos={userData?.public_repos}
          followers={userData?.followers}
          bio={userData?.bio}
        />
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
