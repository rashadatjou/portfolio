/*
 * File: /app/components/Tooltip.tsx
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { PropsWithChildren } from "react";

import cns from "classnames";

/**
 * CSS:
 * tooltip.css
 */

// - Types
type Props = PropsWithChildren<{
  text: string | undefined;
  position?: "left" | "right" | "top" | "bottom";
  type?: "solid" | "dotted";
  alwaysOn?: boolean;
}>;

// - Component
const Tooltip = ({
  children,
  text,
  alwaysOn,
  position = "top",
  type = "solid",
}: Props) => (
  <div className="tooltip">
    {children}
    <span
      className={cns([
        "tooltip__content",
        position,
        alwaysOn && "always-on",
        type,
      ])}>
      {text}
    </span>
  </div>
);

// - Exports
export default Tooltip;
