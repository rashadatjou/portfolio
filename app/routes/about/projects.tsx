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
import type { GitRepo } from "~/typings/git";

import { json } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";

import closeSourceProjects from "~/constants/closed-source";

// - Types
type LoaderProps = {
  repoList?: GitRepo[];
};

// - Route Module API
export async function loader({}: LoaderArgs) {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/git/repo-list`);
  const data = await res.json(); // GitRepos
  return json({ repoList: data }, { status: 200 });
}

// - Component
const Projects = () => {
  const { repoList } = useLoaderData<LoaderProps>();
  const { type } = useTransition();

  return (
    <div className="projects">
      <div className="projects__container">
        <h3 className="title">Closed source</h3>
        <div className="card-grid">
          {closeSourceProjects.map((project) => (
            <div className="card" key={project.href}>
              <a href={project.href} target="_blank">
                <p>{project.name}</p>
              </a>
            </div>
          ))}
        </div>

        <h3 className="title">Open source</h3>
        <div className="card-grid">
          {!repoList && <div className="card">No projects available...</div>}
          {type === "idle" &&
            repoList?.map((repo) => (
              <div key={repo.info.id} className="card">
                <a href={repo.urls.htmlURL} target="_blank">
                  <p>{repo.info.fullName}</p>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// - Exports
export default Projects;
