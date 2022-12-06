/*
 * File: /app/views/Intro/element/IntroSettings.tsx
 * Project: portfolio
 * Created: Thursday, 17th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

/*
CSS Files:
* button.css
* modal.css
* form.css
*/

import { useState } from "react";

import Modal from "~/components/Modal";
import Button from "~/components/Button";
import LanguageForm from "./LanguageForm";
import ThemeForm from "./ThemeForm";
import CookiesForm from "./CookiesForm";

// - Types
type SettingModalProps = {
  present: boolean;
  onToggle: () => void;
};

// - Components
const SettingModal = ({ onToggle, present }: SettingModalProps) => (
  <Modal present={present}>
    <LanguageForm />
    <ThemeForm />
    <CookiesForm />
    <Button buttonType="primary" onClick={onToggle}>
      Close
    </Button>
  </Modal>
);

const Settings = () => {
  const [show, setShow] = useState(false);

  const onToggleModal = () => {
    setShow((state) => !state);
  };

  return (
    <div className="intro__settings">
      <Button buttonType="icon" onClick={onToggleModal} bordered animated>
        ⚙️
      </Button>
      <SettingModal present={show} onToggle={onToggleModal} />
    </div>
  );
};

// - Exports
export default Settings;
