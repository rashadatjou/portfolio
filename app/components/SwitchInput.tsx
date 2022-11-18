/*
 * File: /app/components/Switch.tsx
 * Project: portfolio
 * Created: Friday, 18th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/**
 * CSS File:
 * switch.css
 */

import type { InputHTMLAttributes } from "react";
import cns from "classnames";

// - Types
type Props = {
  rounded?: boolean;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

// - Components
const SwitchInput = ({ rounded, label, ...htmlAtt }: Props) => (
  <label className="switch">
    <input type="checkbox" {...htmlAtt} />
    <span className={cns(["slider", rounded && "round"])}></span>
  </label>
);

// - Exports
export default SwitchInput;
