import React, { FC } from "react"
import { PageHeaderWrapper } from "./styles"

export const PageHeader: FC = ({ children }) => {
  return <PageHeaderWrapper>{children}</PageHeaderWrapper>
}
