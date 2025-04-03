import React, { FC, InputHTMLAttributes } from "react";
import { Wrapper } from "./styles";

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> &
  Partial<{
    name: string;
    color:
      | "primary"
      | "light-primary"
      | "secondary"
      | "light-secondary"
      | "grey"
      | "light-grey"
      | "dark"
      | "light-dark";
    href: string;
    size: "sm" | "md" | "lg";
  }>;

export const TextArea: FC<TextAreaProps> = (props) => {
  return <Wrapper {...props} />;
};
