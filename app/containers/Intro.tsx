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

import { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useRef, useState } from "react";

import ButtonIcon, {
  stylesheet as buttonIconStylesheet,
} from "~/components/button/ButtonIcon";

import Modal, { stylesheet as modalStylesheet } from "~/components/Modal/Modal";
import ModalButton from "~/components/Modal/ModalButton";

// - Components
const Settings = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onOpen = () => {
    if (modalRef.current?.open) {
      modalRef.current?.close();
    } else {
      modalRef.current?.show();
    }
  };

  return (
    <div className="intro__settings">
      <ButtonIcon onClick={onOpen} bordered>
        ⚙️
      </ButtonIcon>
      <Modal ref={modalRef}>
        This is a test modal
        <ModalButton title="Dismiss" action={onOpen} />
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
  buttonIconStylesheet,
  modalStylesheet,
];
