import React from "react"
import { FaChevronCircleRight } from "react-icons/fa"
import { WhatIDoSectionWrapper } from "./styles"
import { AboutSectionTitle } from "../style";
export const WhatIDoSection = () => {
  return (
    <WhatIDoSectionWrapper>
      <AboutSectionTitle>
        <FaChevronCircleRight/>
        What I do
      </AboutSectionTitle>
    </WhatIDoSectionWrapper>
  )
}
