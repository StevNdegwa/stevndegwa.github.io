import * as React from "react";
import icon from "../images/icon.png";
import type { HeadFC, PageProps } from "gatsby";
import { Hero, WhatIdo } from "../components/home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />
      <WhatIdo />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Stephen Ng'ang'a</title>
    <link rel="icon" href={icon} />
  </>
);
