/*
 * File: /app/components/button/Button.tsx
 * Project: portfolio
 * Created: Wednesday, 16th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { ButtonHTMLAttributes } from "react";
import type { LinkDescriptor } from "@remix-run/node";
import buttonCssPath from "~/styles/element/button.css";
import cls from "classnames";

// - Props
type Props = {
  bordered?: Boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const ButtonIcon = ({ children, className, bordered, ...htmlAtt }: Props) => (
  <button
    {...htmlAtt}
    className={cls(["btn btn-icon", bordered && "border", className])}>
    {children}
  </button>
);

// - Exports
export default ButtonIcon;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: buttonCssPath },
];
