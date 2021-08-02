import React, { FC } from "react"
import { ButtonWrapper } from "./styles"

export interface IconButtonProps {
  color?: "primary" | "secondary" | "tertiary"
  [prop: string]: unknown
}

export const IconButton: FC<IconButtonProps> = ({ children, color, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}
