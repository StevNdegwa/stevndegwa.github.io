import * as React from "react";
import icon from "../images/icon.png";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import {
  Hero,
  WhatIdo,
  WhatIWorkedWith,
  WorkExperience,
  JobDataType,
} from "../components/home";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        whatIDo
        whatIWorkWith
        jobs {
          start
          end
          company
          position
          description
        }
      }
    }
  `);

  return (
    <>
      <Hero />
      <WhatIdo list={data?.dataJson?.whatIDo || []} />
      <WhatIWorkedWith list={data?.dataJson?.whatIWorkWith || []} />
      <WorkExperience list={(data?.dataJson?.jobs || []) as JobDataType[]} />
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
