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
import { useJsDetect } from "~/context/js-detect";

import SwitchInput from "~/components/SwitchInput";

// - Props
type Props = {};

function JavascriptForm({}: Props) {
  const { t } = useTranslation();
  const submit = useSubmit();
  const [{ jsEnabled }] = useJsDetect();

  const onChange = (event: FormEvent) => {
    submit(event.currentTarget as any, { replace: false });
  };

  return (
    <Form className="form" onChange={onChange} action="api/v1/js-detect">
      <fieldset className="linear">
        <span className="label">{t("setting.js.title")}</span>
        <SwitchInput
          defaultChecked={jsEnabled}
          name="xjs"
          id="javascript-switch"
          rounded
        />
      </fieldset>
    </Form>
  );
}

export default JavascriptForm;
