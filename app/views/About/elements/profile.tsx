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
type ProfileProps = Partial<
  Pick<
    GitUser,
    | "name"
    | "avatarUrl"
    | "bio"
    | "publicRepoCount"
    | "publicGistCount"
    | "followersCount"
  >
>;

// - Component
const Profile = ({
  name,
  avatarUrl,
  bio,
  publicRepoCount,
  followersCount,
  publicGistCount,
}: ProfileProps) => (
  <div className="profile">
    <img className="image" src={avatarUrl} alt="Profile image" />
    <h2 className="title">{name}</h2>
    <p className="bio">{bio}</p>
    <ul className="stat-list">
      <li>
        <Tooltip type="dotted" alwaysOn position="left" text="Public repos">
          <p className="stat">{publicRepoCount}</p>
        </Tooltip>
      </li>
      <li>
        <Tooltip type="dotted" alwaysOn position="bottom" text="Public gists">
          <p className="stat">{publicGistCount}</p>
        </Tooltip>
      </li>
      <li>
        <Tooltip type="dotted" alwaysOn position="right" text="Git Followers">
          <p className="stat">{followersCount}</p>
        </Tooltip>
      </li>
    </ul>
  </div>
);

// - Exports
export default Profile;
