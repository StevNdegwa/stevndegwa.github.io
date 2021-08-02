import React, { FC } from "react"
import { ButtonWrapper } from "./styles"

export interface ButtonProps {
  color?: "primary" | "secondary" | "tertiary"
  [prop: string]: unknown
}

export const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}
