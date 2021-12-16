import React from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { SectionContainer } from "../../molecules"
import {
  BadgesCertificationsWrapper,
  BadgesCertificationsTitle,
  BadgesCertificationsItems,
  Item,
  Circle2,
  Circle1,
} from "./styles"

type Badge = {
  title: string
  by: string
  iconId: string
  from: string
  link: string
  homepage: string
}

export const BadgesCertifications = () => {
  const {
    allJson: {
      edges: [
        ,
        {
          node: { badges },
        },
      ],
    },
  } = useStaticQuery(
    graphql`
      query {
        allJson {
          edges {
            node {
              badges {
                by
                from
                homepage
                iconId
                link
                title
              }
            }
          }
        }
      }
    `
  )


  return (
    <BadgesCertificationsWrapper>
      <Circle1 />
      <Circle2 />
      <SectionContainer style={{ marginBottom: "0px" }}>
        <BadgesCertificationsTitle>
          Badges and Certifications
        </BadgesCertificationsTitle>
        <BadgesCertificationsItems>
          {badges.map((badge: Badge, index: number) => (
            <Item key={index}>
              <section>
                <div>
                  <a href={badge.homepage} target="_blank">
                    <img
                      src={badge.iconId}
                      alt={`${badge.title} by ${badge.from}`}
                    />
                  </a>
                </div>
                <div>
                  <span>
                    {badge.title} <br />
                    <span>by</span> {badge.by}
                  </span>
                </div>
              </section>
              <section>
                <div>
                  <FaCalendarAlt />
                </div>
                <div>{badge.from} - ~</div>
              </section>
              <section>
                <a href={badge.link} target="_blank">
                  View credential
                </a>
              </section>
            </Item>
          ))}
        </BadgesCertificationsItems>
      </SectionContainer>
    </BadgesCertificationsWrapper>
  )
}
