import * as React from "react"
import {
  PageLayout,
  IntroSection,
  AboutMeSection,
  ContactMeSection,
} from "../components"

const IndexPage = () => (
  <PageLayout>
    <IntroSection />
    <AboutMeSection />
    <ContactMeSection />
  </PageLayout>
)

export default IndexPage
