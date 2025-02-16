import * as React from "react";
import icon from "../images/icon.png";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import {
  Hero,
  WhatIdo,
  WhatIWorkedWith,
  WorkExperience,
  JobDataType,
  BadgesAndCertifications,
  BadgeType,
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
        badges {
          title
          by
          iconId
          from
          link
          homepage
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
      <BadgesAndCertifications
        list={(data?.dataJson?.badges || []) as BadgeType[]}
      />
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
