import React from "react";
import { PageLayout } from "./src/components/templates";

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);
