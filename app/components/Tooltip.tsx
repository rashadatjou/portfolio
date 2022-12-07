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
  alwaysOn?: boolean;
}>;

// - Component
const Tooltip = ({ children, text, alwaysOn, position = "top" }: Props) => (
  <div className="tooltip">
    {children}
    <span className={cns(["tooltip__text", position, alwaysOn && "always-on"])}>
      {text}
    </span>
  </div>
);

// - Exports
export default Tooltip;
