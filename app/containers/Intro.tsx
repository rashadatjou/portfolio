/*
 * File: /app/containers/Intro.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import introCssPath from "~/styles/container/intro.css";
import buttonCssPath from "~/styles/element/button.css";
import modalCssPath from "~/styles/element/modal.css";

import { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import Modal from "~/components/Modal";
import Button from "~/components/Button";

// - Components
const Settings = () => {
  const [show, setShow] = useState(false);

  const onToggleModal = () => {
    setShow((state) => !state);
  };

  return (
    <div className="intro__settings">
      <Button buttonType="icon" onClick={onToggleModal} bordered>
        ⚙️
      </Button>
      <Modal present={show}>
        This is a test modal
        <Button onClick={onToggleModal}>Close</Button>
      </Modal>
    </div>
  );
};

const Navbar = () => (
  <div className="intro__menu">
    <ul className="intro__menu-list">
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const IntroContainer = () => {
  return (
    <div className="intro">
      <Settings />
      <h1>Hello, My name is Mehdi 👋🏽</h1>
      <p>Check out the options bellow for more info 👇🏽</p>
      <Navbar />
    </div>
  );
};

// - Exports
export default IntroContainer;
export const links: LinkDescriptor[] = [
  { rel: "stylesheet", href: introCssPath },
  { rel: "stylesheet", href: buttonCssPath },
  { rel: "stylesheet", href: modalCssPath },
];
