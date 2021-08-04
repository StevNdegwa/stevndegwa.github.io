import * as React from "react"
import { PageLayout } from "../components"
import {
  IntroSection,
  AboutMeSection,
  TiltedBg,
  ContactMeSection,
} from "../styles/indexStyles"

const IndexPage = () => (
  <PageLayout>
    <IntroSection>
      <div>
        <div>
          <div>👋 My name is</div>
          <div>Stephen Ng’ang’a</div>
        </div>
        <div>
          I’m an <span>Engineer</span>. I build things that solve problems.
        </div>
      </div>
    </IntroSection>
    <AboutMeSection>
      <TiltedBg></TiltedBg>
    </AboutMeSection>
    <ContactMeSection>

    </ContactMeSection>
  </PageLayout>
)

export default IndexPage
