/*
 * File: /app/components/Modal/Modal.tsx
 * Project: portfolio
 * Created: Wednesday, 16th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { PropsWithChildren } from "react";

// - Types
type Props = PropsWithChildren<{
  present?: boolean;
}>;

// - Component
const Modal = ({ present, children }: Props) => {
  if (!present) return null; // Do not render

  return (
    <div className="modal">
      <div className="modal-container">{children}</div>
    </div>
  );
};

// - Exports
export default Modal;
