import React from "react"

import {
  IntroSectionWrapper,
  IntroSectionName,
  IntroSectionThingsIDo,
} from "./styles"

export const IntroSection = () => {
  return (
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
      <IntroSectionThingsIDo>
        <div>I live in Nairobi, Kenya</div>
        <div>I am a programmer</div>
      </IntroSectionThingsIDo>
    </IntroSectionWrapper>
  )
}
