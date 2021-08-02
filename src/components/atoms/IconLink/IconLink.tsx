import React, { FC } from "react"
import { LinkWrapper } from "./styles";

export interface IconLinkProps {
  color?: "primary" | "secondary" | "tertiary";
  [prop: string]: unknown;
}

export const IconLink: FC<IconLinkProps> = ({ children, color, ...props }) => {
  return <LinkWrapper {...props}>{children}</LinkWrapper>
};
