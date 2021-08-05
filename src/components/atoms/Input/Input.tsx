import React, { FC } from "react"
import { InputWrapper } from "./styles"

export interface InputProps {
  [prop: string]: unknown;
}

export const Input: FC<InputProps> = ({ ...props }) => {
  return <InputWrapper {...props} />
}
