/*
 * File: /app/routes/about/links.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import socialLinks from "~/constants/social-links";
import { useTransition } from "@remix-run/react";

// - Component
const Links = () => {
  const { type } = useTransition();
  return (
    <div className="links">
      <div className="links__container">
        {type === "idle" && (
          <div className="card-grid">
            {socialLinks.map((item) => (
              <a
                className="card"
                key={item.href}
                href={item.href}
                target="_blank">
                <p>{item.username}</p>@<span>{item.platform}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// - Exports
export default Links;
