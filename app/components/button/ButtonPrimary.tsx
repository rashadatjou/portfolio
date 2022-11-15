/*
 * File: ButtonPrimary.tsx
 * Project: Portfolio 3.0
 * Created: Monday, 26th September 2022
 * -----
 * Copyright 2022, ©Denpex
 * -----
 */

import type { ButtonHTMLAttributes } from "react";
import type { LinkDescriptor } from "@remix-run/node";
import buttonCssPath from "~/styles/element/button.css";
import cls from "classnames";

// - Props
type Props = ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const ButtonPrimary = ({ children, className, ...htmlAtt }: Props) => {
  return (
    <button {...htmlAtt} className={cls(["btn btn-primary", className])}>
      {children}
    </button>
  );
};

// - Exports
export default ButtonPrimary;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: buttonCssPath },
];
