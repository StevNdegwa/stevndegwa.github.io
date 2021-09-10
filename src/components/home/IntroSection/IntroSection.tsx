import React, { FC, memo } from "react"
import { IntroSectionWrapper, IntroSectionName } from "./styles"

export const IntroSection: FC = memo(() => (
  <IntroSectionWrapper>
    <IntroSectionName>
      <div>
        <div>👋 My name is</div>
        <div>Stephen Ng’ang’a</div>
      </div>
      <div>
        I’m an <span>Engineer</span>. I build things that solve problems.
      </div>
    </IntroSectionName>
  </IntroSectionWrapper>
))
