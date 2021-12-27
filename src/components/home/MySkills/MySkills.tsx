import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"
import { MySkillsWrapper, MySkillsTitle, MySkillsList } from "./styles"

export const MySkills = () => {
  const {
    allJson: { edges },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allJson {
          edges {
            node {
              skills
            }
          }
        }
      }
    `
  )

  const {
    node: { skills },
  } = edges.find((edge: any) => Boolean(edge.node.skills))

  return (
    <MySkillsWrapper>
      <MySkillsTitle>
        <span>
          <FormattedMessage id="my_skills" />
        </span>
      </MySkillsTitle>
      <MySkillsList>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </MySkillsList>
    </MySkillsWrapper>
  )
}
