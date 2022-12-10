/*
 * File: /app/routes/about/links.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LoaderArgs } from "@remix-run/node";

// - Types
type Props = {};

// - Route Module API
export async function loader({}: LoaderArgs) {
  // TODO: - Call data here
  return {};
}

// - Component
const Links = ({}: Props) => {
  return (
    <div className="links">
      <div className="links__container">
        <div className="card-grid">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

// - Exports
export default Links;
