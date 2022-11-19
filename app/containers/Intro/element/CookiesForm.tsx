/*
 * File: /app/containers/Intro/element/JavascriptForm.tsx
 * Project: portfolio
 * Created: Friday, 18th November 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type { FormEvent } from "react";

import { Form, useSubmit } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import SwitchInput from "~/components/SwitchInput";

// - Props
type Props = {};

function JavascriptForm({}: Props) {
  const submit = useSubmit();
  const { t } = useTranslation();

  const onChange = (event: FormEvent) => {
    submit(event.currentTarget as any, { replace: true });
  };

  return (
    <Form className="form" onChange={onChange}>
      <fieldset className="linear">
        <span className="label">{t("setting.cookie.title")}</span>
        <SwitchInput name="cookies" rounded />
      </fieldset>
    </Form>
  );
}

export default JavascriptForm;
