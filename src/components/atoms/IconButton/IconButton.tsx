import React, { forwardRef } from "react"
import { ButtonWrapper } from "./styles"

export interface IconButtonProps {
  color?: "primary" | "secondary" | "tertiary"
  [prop: string]: unknown
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, color, ...props }, ref) => {
    return (
      <ButtonWrapper {...props} color={color} ref={ref}>
        {children}
      </ButtonWrapper>
    )
  }
)
