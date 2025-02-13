import * as React from "react";
import icon from "../images/icon.png";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import { Hero, WhatIdo, WhatIWorkedWith } from "../components/home";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        whatIDo
        whatIWorkWith
      }
    }
  `);

  return (
    <>
      <Hero />
      <WhatIdo list={data?.dataJson?.whatIDo || []} />
      <WhatIWorkedWith list={data?.dataJson?.whatIWorkWith || []} />
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
