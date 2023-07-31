/*
 * File: /app/routes/index.tsx
 * Project: portfolio
 * Created: Tuesday, 4th October 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/cloudflare";
import { useCatch } from "@remix-run/react";

import MainView, { links as introLinks } from "~/views/Main";

// - Route Module API
export const links: LinksFunction = () => {
  return [...introLinks];
};

// - Component
const MainRoute = () => {
  return <MainView />;
};

const CatchBoundary = () => {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
};

// - Exports
export default MainRoute;
export { CatchBoundary };
