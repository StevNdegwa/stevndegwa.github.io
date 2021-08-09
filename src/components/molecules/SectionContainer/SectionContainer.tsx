import React, { FC } from "react"

import { SectionContainerWrapper } from "./styles"

export const SectionContainer: FC = ({ children }) => {
  return <SectionContainerWrapper>{children}</SectionContainerWrapper>
}
