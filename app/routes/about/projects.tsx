/*
 * File: /app/views/About/element/Projects.tsx
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
import { useLoaderData, useTransition } from "@remix-run/react";

import closeSourceProjects from "~/constants/project-list";
import { useTranslation } from "react-i18next";

// - Types
type LoaderProps = {
  repoList?: GitRepo[];
};

// - Route Module API
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tagCssPath }];
};

export async function loader({ context }: LoaderArgs) {
  const baseUrl = (context.env as any).BASE_URL;
  const res = await fetch(`${baseUrl}/api/v1/git/repo-list`);
  const data = await res.json(); // GitRepos
  return json({ repoList: data }, { status: 200 });
}

// - Component
const Projects = () => {
  const { repoList } = useLoaderData<LoaderProps>();
  const { type } = useTransition();
  const { t } = useTranslation();

  if (type !== "idle") return null;
  return (
    <div className="projects">
      <div className="projects__container">
        <h3 className="title">{t("about.projects.close-source")}</h3>
        <div className="card-grid">
          {closeSourceProjects.map((project) => (
            <div className="card" key={project.href}>
              <a
                href={project.href}
                target="_blank"
                referrerPolicy="no-referrer">
                <h3>{project.name}</h3>
              </a>
              <ul className="tag__container">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="title">{t("about.projects.open-source")}</h3>
        <div className="card-grid">
          {!repoList && <div className="card">{t("about.projects.empty")}</div>}
          {repoList?.map((repo) => (
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
