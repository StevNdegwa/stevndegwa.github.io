import React, { FC } from "react";

import { TextAreaWrapper } from "./styles";

export interface TextAreaProps {
  [props: string]: unknown
}

export const TextArea: FC<TextAreaProps> = ({ ...props }) => {
  return <TextAreaWrapper {...props} />
}
