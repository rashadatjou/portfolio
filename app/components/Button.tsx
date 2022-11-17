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
import cls from "classnames";

// - Props
type ButtonType = "primary" | "secondary" | "icon";
type Props = {
  buttonType?: ButtonType;
  bordered?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// - Components
const Button = ({
  children,
  className,
  buttonType = "primary",
  bordered,
  ...htmlAtt
}: Props) => (
  <button
    {...htmlAtt}
    className={cls([
      "btn btn-primary",
      className,
      buttonType,
      bordered && "border",
    ])}>
    {children}
  </button>
);

// - Exports
export default Button;
