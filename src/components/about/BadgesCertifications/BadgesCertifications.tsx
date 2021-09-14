import React from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { SectionContainer } from "../../molecules"
import {
  BadgesCertificationsWrapper,
  BadgesCertificationsTitle,
  BadgesCertificationsItems,
  Item,
} from "./styles"

type Badge = {
  title: string
  by: string
  iconLink: string
  from: string
  link: string
  homepage: string
}

export const BadgesCertifications = () => {
  const {
    dataJson: { badges },
  } = useStaticQuery(
    graphql`
      query {
        dataJson {
          badges {
            by
            from
            link
            iconLink
            title
            homepage
          }
        }
      }
    `
  )

  return (
    <BadgesCertificationsWrapper>
      <SectionContainer>
        <BadgesCertificationsTitle>
          Badges and Certifications
        </BadgesCertificationsTitle>
        <BadgesCertificationsItems>
          {badges.map((badge: Badge) => (
            <Item>
              <section>
                <div>
                  <a href={badge.homepage} target="_blank">
                    <img
                      src={badge.iconLink}
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
