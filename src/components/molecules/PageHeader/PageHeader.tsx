import React, { FC } from "react"
import { PageHeaderWrapper } from "./styles"
import { SectionContainer } from "../SectionContainer"

export const PageHeader: FC = ({ children }) => {
  return (
    <PageHeaderWrapper>
      <SectionContainer style={{ marginBottom: "0" }}>
        {children}
      </SectionContainer>
    </PageHeaderWrapper>
  )
}
