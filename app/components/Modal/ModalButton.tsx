/*
 * File: /app/components/Modal/ModalButton.tsx
 * Project: portfolio
 * Created: Wednesday, 16th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

// - Types
type Props = {
  title: string;
  action?: () => void;
};

// - Components
const ModalButton = ({ title, action }: Props) => (
  <form method="dialog" onSubmit={() => action()}>
    <button>{title}</button>
  </form>
);

// - Exports
export default ModalButton;
