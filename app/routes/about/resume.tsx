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
import { useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import resumeList from "~/constants/resume-list";

// - Types
type Props = {};

// - Route Module API
export async function loader(args: LoaderArgs) {
  // TODO: - Call data here
  return {};
}

// - Component
const Resume = ({}: Props) => {
  const { type } = useTransition();
  const { t } = useTranslation();

  return (
    <div className="resume">
      <div className="resume__container">
        {type === "idle" && (
          <div className="card-grid">
            {resumeList.map((item) => (
              <div key={item.href} className="card inline">
                <h3>{t(item.name)}</h3>
                <Button href={item.href}>{t("download")} 📑</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// - Exports
export default Resume;
