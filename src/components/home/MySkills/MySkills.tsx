import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
        <span>My skills</span>
      </MySkillsTitle>
      <MySkillsList>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </MySkillsList>
    </MySkillsWrapper>
  )
}
