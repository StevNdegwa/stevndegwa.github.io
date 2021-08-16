import React from "react"
import { PageLayout, SectionContainer } from "../components"

import {
  IntroSection,
  ContactMeSection,
  WhatIDoSection,
} from "../components/home"

const IndexPage = () => (
  <PageLayout>
    <SectionContainer>
      <IntroSection />
    </SectionContainer>
    <SectionContainer>
      <WhatIDoSection />
    </SectionContainer>
    <SectionContainer>
      <ContactMeSection />
    </SectionContainer>
  </PageLayout>
)

export default IndexPage
