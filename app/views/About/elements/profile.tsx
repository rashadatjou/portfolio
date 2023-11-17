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
import type { TFunction } from "i18next";

// import Tooltip from "~/components/Tooltip";

// - Types
type ProfileProps = { translate: TFunction } & Partial<
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

// type StatusProps = Partial<
//   Pick<
//     ProfileProps,
//     "publicGistCount" | "publicRepoCount" | "followersCount" | "translate"
//   >
// >;

// // - Component
// const Statuses = ({
//   translate,
//   publicRepoCount,
//   publicGistCount,
//   followersCount,
// }: StatusProps) => (
//   <ul className="stat-list">
//     <li>
//       <Tooltip position="left" text={translate?.("about.profile.stat.1")}>
//         <p className="stat">{publicRepoCount}</p>
//       </Tooltip>
//     </li>
//     <li>
//       <Tooltip position="bottom" text={translate?.("about.profile.stat.2")}>
//         <p className="stat">{publicGistCount}</p>
//       </Tooltip>
//     </li>
//     <li>
//       <Tooltip position="right" text={translate?.("about.profile.stat.3")}>
//         <p className="stat">{followersCount}</p>
//       </Tooltip>
//     </li>
//   </ul>
// );

const Profile = ({ name, avatarUrl, bio }: ProfileProps) => (
  <div className="profile">
    <img className="image" src={avatarUrl} alt="Profile image" />
    <h2 className="title">{name}</h2>
    <p className="bio">{bio}</p>
  </div>
);

// - Exports
export default Profile;
