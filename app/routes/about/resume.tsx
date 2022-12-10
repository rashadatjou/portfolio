/*
 * File: /app/routes/about/resume.tsx
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
export async function loader(args: LoaderArgs) {
  // TODO: - Call data here
  return {};
}

// - Component
const Resume = ({}: Props) => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume__container">
        <div className="card-grid">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

// - Exports
export default Resume;
