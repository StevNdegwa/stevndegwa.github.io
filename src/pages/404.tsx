import * as React from "react";
import icon from "@assets/images/icon.png";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div>PAGE NOT FOUND</div>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>404</title>
    <link rel="icon" href={icon} />
  </>
);
