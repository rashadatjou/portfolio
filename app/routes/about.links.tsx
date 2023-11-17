/*
 * File: /app/routes/about.links.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import socialLinks from "~/constants/social-links";
import { useNavigation } from "@remix-run/react";

// - Component
const Links = () => {
  const { state } = useNavigation();
  return (
    <div className="links">
      <div className="links__container">
        {state === "idle" && (
          <div className="card-grid">
            {socialLinks.map((item) => (
              <a
                className="card"
                key={item.href}
                href={item.href}
                target="_blank">
                <h3>
                  {item.username}
                  <span>@{item.platform}</span>
                </h3>
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
