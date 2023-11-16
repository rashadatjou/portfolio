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

import closeSourceProjects from "~/constants/project-list";
import REPO_LIST from "~/mock/git/repo-list.json";

// - Types
type LoaderProps = {
  repoList?: GitRepo[];
};

// - Route Module API
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tagCssPath }];
};

export async function loader({}: LoaderArgs) {
  let repoList = mapRepoList(REPO_LIST as any);
  return json({ repoList }, { status: 200 });
}

// - Component
const Projects = () => {
  const { repoList } = useLoaderData<LoaderProps>();
  const { state } = useNavigation();
  const { t } = useTranslation();

  if (state !== "idle") return null;

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
                  <li key={tag} className="tag no-bg">
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
