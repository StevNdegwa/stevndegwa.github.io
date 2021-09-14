import React, { FC } from "react"
import { FaChevronCircleRight } from "react-icons/fa"
import { AboutMeSectionWrapper, AboutMeSectionTitle } from "./styles"

export interface AboutMeSectionProps {
  title: string
}

export const AboutMeSection: FC<AboutMeSectionProps> = ({ title }) => {
  return (
    <AboutMeSectionWrapper>
      <AboutMeSectionTitle>
        <FaChevronCircleRight />
        {title}
      </AboutMeSectionTitle>
    </AboutMeSectionWrapper>
  )
}
