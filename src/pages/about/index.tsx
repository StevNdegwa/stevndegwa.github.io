import React from "react"
import { PageLayout, PageHeader, SectionContainer } from "../../components"
import { WhatIDoSection } from "../../components/about";

export default function About() {
  return (
    <PageLayout>
      <PageHeader>
        About Me
      </PageHeader>
      <SectionContainer>
        <WhatIDoSection/>
      </SectionContainer>
    </PageLayout>
  )
}
