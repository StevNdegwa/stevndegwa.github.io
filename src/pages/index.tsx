import * as React from "react";
import icon from "../images/icon.png";
import type { HeadFC, PageProps } from "gatsby";
import { PageLayout } from "../components";
import { Hero } from "../components/home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Stephen Ng'ang'a</title>
    <link rel="icon" href={icon} />
  </>
);
