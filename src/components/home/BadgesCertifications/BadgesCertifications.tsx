import React from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { Image } from "cloudinary-react"
import { FormattedMessage } from "react-intl"
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
    allJson: { edges },
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

  const {
    node: { badges },
  } = edges.find((edge: any) => Boolean(edge.node.badges))

  return (
    <BadgesCertificationsWrapper>
      <Circle1 />
      <Circle2 />
      <SectionContainer style={{ marginBottom: "0px" }}>
        <BadgesCertificationsTitle>
          <FormattedMessage id="badges_and_certs" />
        </BadgesCertificationsTitle>
        <BadgesCertificationsItems>
          {badges.map((badge: Badge, index: number) => (
            <Item key={index}>
              <section>
                <div>
                  <a href={badge.homepage} target="_blank">
                    {/* <img
                      src={badge.iconLink}
                      alt={`${badge.title} by ${badge.from}`}
                    /> */}
                    <Image publicId={badge.iconId} width="50" />
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
