/*
 * File: /app/routes/about/downloads.tsx
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";
import downloadsList from "~/constants/downloads-list";

// - Types
type Props = {};

// - Helper
function loadTypeEmoji(type: string): string {
  switch (type) {
    case "file":
      return "📑";
    default:
      return "";
  }
}

// - Component
const Downloads = ({}: Props) => {
  const { type } = useTransition();
  const { t } = useTranslation();

  return (
    <div className="downloads">
      <div className="downloads__container">
        {type === "idle" && (
          <div className="card-grid">
            {downloadsList.map((item) => (
              <div key={item.href} className="card inline">
                <h3>
                  {t(item.name)} {loadTypeEmoji(item.type)}
                </h3>
                <Button hrefAsset href={item.href}>
                  {t("download")}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// - Exports
export default Downloads;
