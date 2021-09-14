import React, { useCallback } from "react"
import { PageLayout, PageHeader, SectionContainer } from "../../components"

export default function Contacts() {
  const skipToContent = useCallback(() => {}, [])
  return (
    <PageLayout skipToContent={skipToContent}>
      <PageHeader>To reach out</PageHeader>
      <SectionContainer>Email: sndegwa.n@outlook.com</SectionContainer>
    </PageLayout>
  )
}
