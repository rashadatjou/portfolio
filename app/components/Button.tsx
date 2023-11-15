/*
 * File: /app/components/button/ButtonPrimary.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/**
 * CSS:
 * button.css
 */

import type { ButtonHTMLAttributes } from "react";
import { Link } from "@remix-run/react";
import cls from "classnames";

// - Props
type ButtonType = "primary" | "secondary" | "icon";
type Props = {
  buttonType?: ButtonType;
  bordered?: boolean;
  animated?: boolean;
  capsule?: boolean;
  href?: string;
  hrefAsset?: boolean;
  shadow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const Button = ({
  children,
  className,
  buttonType = "primary",
  bordered,
  animated,
  capsule,
  href,
  hrefAsset,
  shadow,
  ...htmlAtt
}: Props) => (
  <button
    {...htmlAtt}
    className={cls([
      "btn btn-primary",
      buttonType,
      capsule && "capsule",
      bordered && "border",
      animated && "animate",
      href && "link",
      shadow && "shadow",
      className,
    ])}>
    {href && <Link to={href} replace reloadDocument={hrefAsset} />}
    {children}
  </button>
);

// - Exports
export default Button;
