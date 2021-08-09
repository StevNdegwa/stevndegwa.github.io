import React, { FC } from "react"
import { ButtonWrapper } from "./styles"
import { ColorType } from "../types"

export interface ButtonProps {
  color?: ColorType
  raised?: boolean
  [prop: string]: unknown
}

export const Button: FC<ButtonProps> = ({
  children,
  raised,
  color = "primary",
  ...props
}) => {
  return (
    <ButtonWrapper {...props} raised={!!raised} color={color}>
      {children}
    </ButtonWrapper>
  )
}
