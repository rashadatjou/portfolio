/*
 * File: /app/routes/contact.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import contactCSSPaths from "~/styles/container/contact.css";
import buttonCSSPaths from "~/styles/element/button.css";
import formCSSPaths from "~/styles/element/form.css";

import type { LinksFunction } from "@remix-run/node";
import Button from "~/components/Button";

// - Route Module API
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: contactCSSPaths },
    { rel: "stylesheet", href: buttonCSSPaths },
    { rel: "stylesheet", href: formCSSPaths },
  ];
};

// - Components
const ContactRoute = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="form">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@domain.tld"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Ask me anything" />
          </fieldset>
          <Button type="submit" buttonType="primary">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

// - Exports
export default ContactRoute;
