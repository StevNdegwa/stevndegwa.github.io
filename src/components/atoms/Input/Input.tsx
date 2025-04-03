import React, { FC, InputHTMLAttributes } from "react";
import { Wrapper } from "./styles";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
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

export const Input: FC<InputProps> = (props) => {
  return <Wrapper placeholder="" {...props} />;
};
