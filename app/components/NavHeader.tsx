/*
 * File: /app/components/NavHeader.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { PropsWithChildren, CSSProperties } from "react";

// - Type
type Props = PropsWithChildren<{}>;

// - Const
const STYLE: CSSProperties = {
  display: "flex",
  padding: "var(--space-large)",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  justifyContent: "space-between",
};

// - Component
function NavHeader({ children }: Props) {
  return <div style={STYLE}>{children}</div>;
}

// - Exports
export default NavHeader;
