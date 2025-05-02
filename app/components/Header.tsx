/*
 * File: /app/components/NavHeader.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

/**
 * CSS:
 * nav-header.css
 */

import type { PropsWithChildren } from "react";
import cns from "classnames";
import MovedDiscloser from "~/components/MovedDiscloser";

// - Type
type Props = PropsWithChildren<{
  position?: "relative" | "fixed";
}>;

// - Component
function NavHeader({ children, position = "fixed" }: Props) {
  return (
    <div className={cns(["nav-header", position])}>
      {children}
      <MovedDiscloser />
    </div>
  );
}

// - Exports
export default NavHeader;
