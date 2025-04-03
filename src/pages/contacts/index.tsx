/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import * as React from "react";
import icon from "@assets/images/icon.png";
import type { HeadFC, PageProps } from "gatsby";
import { ContactMe, Title } from "@components/organisms/contacts";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Title />
      <ContactMe />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Contacts</title>
    <link rel="icon" href={icon} />
  </>
);
