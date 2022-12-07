/*
 * File: /app/views/About/element/Profile.tsx
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { GitUser } from "~/typings/git";
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

// - Component
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

// - Exports
export default Profile;
