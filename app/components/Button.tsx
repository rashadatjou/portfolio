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
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const Button = ({
  children,
  className,
  buttonType = "primary",
  bordered,
  animated,
  href,
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
      href && "link",
    ])}>
    {href && <Link to={href} replace />}
    {children}
  </button>
);

// - Exports
export default Button;
