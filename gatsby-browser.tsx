import React from "react";
import { PageLayout } from "./src/components/PageLayout";

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);

// export const onClientEntry = () => {};
