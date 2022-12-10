/*
 * File: /app/components/LinkList.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { TFunction } from "react-i18next";
import { NavLink } from "@remix-run/react";

/**
 * CSS:
 * link-list.css
 */

// - Types
type LinkListItem = { name: string; href: string };

type LinkListProps = {
  data: LinkListItem[];
  translate?: TFunction<"translation", undefined>;
};

// - Component
const LinkList = ({ data, translate }: LinkListProps) => (
  <div className="link-list__container">
    <ul className="link-list">
      {data.map((item) => (
        <li key={item.href}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={item.href}>
            {translate?.(item.name) || item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

// - Exports
export type { LinkListItem };
export default LinkList;
