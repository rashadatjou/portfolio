/*
 * File: /app/components/Modal/Modal.tsx
 * Project: portfolio
 * Created: Wednesday, 16th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { PropsWithChildren, PropsWithRef, RefObject } from "react";
import type { LinkDescriptor } from "@remix-run/node";

import { forwardRef } from "react";
import cssFile from "~/styles/element/modal.css";

// - Types
type Props = PropsWithChildren<{
  present?: boolean;
}>;

// - Component
const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ present, children }, ref) => {
    return (
      <dialog className="modal-parent" ref={ref} open={present}>
        <div className="modal-container">{children}</div>
      </dialog>
    );
  },
);

// - Exports
export default Modal;
export const stylesheet: LinkDescriptor = {
  rel: "stylesheet",
  href: cssFile,
};
