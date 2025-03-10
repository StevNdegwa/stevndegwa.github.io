/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import * as React from "react";
import icon from "@assets/images/icon.png";
import type { HeadFC, PageProps } from "gatsby";
import { ProjectsList } from "@components/organisms/projects";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <ProjectsList />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Projects</title>
    <link rel="icon" href={icon} />
  </>
);
