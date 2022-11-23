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
import { Link } from "@remix-run/react";
import cls from "classnames";

// - Props
type ButtonType = "primary" | "secondary" | "icon";
type Props = {
  buttonType?: ButtonType;
  bordered?: boolean; // Only works with "icon"
  animated?: boolean; // Only works with icon
  link?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const Button = ({
  children,
  className,
  buttonType = "primary",
  bordered,
  animated,
  link,
  ...htmlAtt
}: Props) => (
  <button
    {...htmlAtt}
    className={cls([
      "btn btn-primary",
      className,
      buttonType,
      bordered && "border",
      animated && "animate",
    ])}>
    {link ? <Link to={link}>{children}</Link> : children}
  </button>
);

// - Exports
export default Button;
