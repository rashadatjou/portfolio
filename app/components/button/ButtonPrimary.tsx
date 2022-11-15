/*
 * File: /app/components/button/ButtonPrimary.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
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
