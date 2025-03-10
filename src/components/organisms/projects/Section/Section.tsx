import { FlexBoxProps } from "@components/molecules";
import React, { FC } from "react";
import { Wrapper } from "./styles";

export type SectionProps = FlexBoxProps;

export const Section: FC<SectionProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
