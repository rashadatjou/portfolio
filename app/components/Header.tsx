/*
 * File: /app/components/NavHeader.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/**
 * CSS:
 * nav-header.css
 */

import type { PropsWithChildren } from "react";
import cns from "classnames";

// - Type
type Props = PropsWithChildren<{
  position?: "relative" | "fixed";
}>;

// - Component
function NavHeader({ children, position = "fixed" }: Props) {
  return <div className={cns(["nav-header", position])}>{children}</div>;
}

// - Exports
export default NavHeader;
