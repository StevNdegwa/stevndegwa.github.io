import React, { FC, PropsWithChildren } from "react";
import { FlexBoxProps } from "../FlexBox";
import { Wrapper } from "./styles";

export const ContentWrapper: FC<PropsWithChildren<FlexBoxProps>> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper direction="column" {...props}>
      {children}
    </Wrapper>
  );
};
