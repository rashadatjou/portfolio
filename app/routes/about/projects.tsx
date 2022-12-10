/*
 * File: /app/views/About/element/Projects.tsx
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
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
const Projects = ({}: Props) => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="card-grid">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

// - Exports
export default Projects;
