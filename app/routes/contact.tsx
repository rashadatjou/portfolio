/*
 * File: /app/routes/contact.tsx
 * Project: portfolio
 * Created: Monday, 5th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { LinksFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import ContactView, { links as contactViewLinks } from "~/views/Contact";

// - Route Module API
export const links: LinksFunction = () => {
  return [...contactViewLinks];
};

// - Components
const ContactRoute = () => {
  const actionData = useActionData();
  const { t } = useTranslation();
  return <ContactView t={t} data={actionData} />;
};

// - Exports
export default ContactRoute;
