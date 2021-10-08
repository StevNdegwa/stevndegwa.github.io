import React, { FC } from "react"
import { ButtonWrapper } from "./styles"
import { ColorType } from "../types"

export interface ButtonProps {
  color?: ColorType
  raised?: boolean
  as?: "a"
  [prop: string]: unknown
}

export const Button: FC<ButtonProps> = ({
  children,
  raised,
  color = "primary",
  as,
  ...props
}) => {
  return (
    <ButtonWrapper
      as={as || "button"}
      {...props}
      raised={!!raised}
      color={color}
    >
      {children}
    </ButtonWrapper>
  )
}
