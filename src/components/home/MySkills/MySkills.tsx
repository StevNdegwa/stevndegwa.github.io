import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MySkillsWrapper, MySkillsTitle, MySkillsList } from "./styles"

export const MySkills = () => {
  const {
    dataJson: { skills },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        dataJson(skills: {}) {
          skills
        }
      }
    `
  )

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
