import React, { HTMLProps, PropsWithChildren } from "react";
import { Wrapper } from "./styles";

export const Content: React.FC<
  PropsWithChildren<HTMLProps<HTMLDivElement>>
> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
