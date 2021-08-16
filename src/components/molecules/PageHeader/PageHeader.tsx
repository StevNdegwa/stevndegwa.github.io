import React, { FC } from "react"
import { PageHeaderWrapper } from "./styles"
import { SectionContainer } from "../SectionContainer";

export const PageHeader: FC = ({ children }) => {
  return (
    <PageHeaderWrapper>
      <SectionContainer>{children}</SectionContainer>
    </PageHeaderWrapper>
  )
}
