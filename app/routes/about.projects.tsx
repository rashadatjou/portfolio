/*
 * File: /app/routes/about.projects
 * Project: portfolio
 * Created: Wednesday, 7th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import tagCssPath from "~/styles/element/tag.css";

import type { LoaderArgs, LinksFunction } from "@remix-run/cloudflare";
import type { GitRepo } from "~/typings/git";

import { json } from "@remix-run/cloudflare";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { mapRepoList } from "~/mapper/git.mapper";

import projectList from "~/constants/project-list";

// - Types
type LoaderProps = {
  repoList?: GitRepo[];
};

// - Route Module API
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tagCssPath }];
};

// - Component
const Projects = () => {
  const { state } = useNavigation();
  const { t } = useTranslation();

  if (state !== "idle") return null;

  return (
    <div className="projects">
      <div className="projects__container">
        <div className="card-grid">
          {projectList.map((project) => (
            <div className="card" key={project.href}>
              <a
                href={project.href}
                target="_blank"
                referrerPolicy="no-referrer">
                <h3>{project.name}</h3>
              </a>
              <ul className="tag__container">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag no-bg">
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// - Exports
export default Projects;
