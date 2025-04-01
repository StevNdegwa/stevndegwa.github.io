import * as React from "react";
import icon from "@assets/images/icon.png";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import {
  Hero,
  WorkExperience,
  JobDataType,
  BadgesAndCertifications,
  BadgeType,
  MySkills,
  AboutMe,
  Quote,
} from "@components/organisms/home";
import { Text } from "@components/atoms";

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
      <AboutMe />
      <MySkills
        whatIWorkedWith={data?.dataJson?.whatIWorkWith || []}
        whatIDo={data?.dataJson?.whatIDo || []}
      />
      <WorkExperience list={(data?.dataJson?.jobs || []) as JobDataType[]} />
      <Quote />
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
