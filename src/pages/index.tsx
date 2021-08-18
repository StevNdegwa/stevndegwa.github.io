import React, { useCallback, useRef } from "react"
import { PageLayout, SectionContainer } from "../components"

import {
  IntroSection,
  ContactMeSection,
  WhatIDoSection,
} from "../components/home"

const IndexPage = () => {
  const contacts = useRef<HTMLDivElement | null>(null)

  const moveToContactsSection = useCallback(() => {
    if (contacts.current) {
      contacts.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [contacts])

  return (
    <PageLayout>
      <SectionContainer>
        <IntroSection moveToContactsSection={moveToContactsSection} />
      </SectionContainer>
      <WhatIDoSection />
      <SectionContainer>
        <ContactMeSection ref={contacts} />
      </SectionContainer>
    </PageLayout>
  )
}

export default IndexPage
