import * as React from "react"
import {
  PageLayout,
  IntroSection,
  HappyClientsSection,
  ContactMeSection,
  SectionContainer,
} from "../components"

const IndexPage = () => (
  <PageLayout>
    <SectionContainer>
      <IntroSection />
    </SectionContainer>
    <SectionContainer>
      <HappyClientsSection />
    </SectionContainer>
    <SectionContainer>
      <ContactMeSection />
    </SectionContainer>
  </PageLayout>
)

export default IndexPage
