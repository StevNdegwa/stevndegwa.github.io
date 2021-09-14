import React, { useCallback } from "react"
import { PageLayout, PageHeader, SectionContainer } from "../../components"
import {
  WhatIDo,
  HowIDoIt,
  WhyMe,
  BadgesCertifications,
} from "../../components/about"

export default function About() {
  const skipToContent = useCallback(() => {}, [])

  return (
    <PageLayout skipToContent={skipToContent}>
      <PageHeader>About Me</PageHeader>
      <SectionContainer>
        <WhatIDo />
      </SectionContainer>
      <SectionContainer>
        <HowIDoIt />
      </SectionContainer>
      <SectionContainer>
        <WhyMe />
      </SectionContainer>
      <BadgesCertifications />
    </PageLayout>
  )
}
