/*
 * File: /app/components/LinkList.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

import { TFunction } from "react-i18next";
import { NavLink } from "@remix-run/react";
import cns from "classnames";

/**
 * CSS:
 * link-list.css
 */

// - Types
type LinkListItem = { name: string; href: string };

type LinkListProps = {
  data: LinkListItem[];
  translate?: TFunction<"translation", undefined>;
  buttonLike?: boolean;
  shadow?: boolean;
  size?: "small" | "normal" | "large";
};

// - Component
const LinkList = ({
  data,
  buttonLike,
  size = "large",
  shadow,
  translate,
}: LinkListProps) => (
  <div className="link-list__container">
    <ul className={cns(["link-list", size])}>
      {data.map((item) => (
        <li key={item.href}>
          <NavLink
            className={({ isActive }) =>
              cns([
                isActive ? "active" : undefined,
                buttonLike ? "button" : undefined
              ])
            }
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
