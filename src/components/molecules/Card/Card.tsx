import React, { FC, PropsWithChildren } from "react";
import { Wrapper } from "./styles";
import { Title } from "./Title";
import { Content } from "./Content";
import { FlexBoxProps } from "../FlexBox";
import { Action } from "./Action";

const _Card: FC<PropsWithChildren<FlexBoxProps>> = ({ children, ...props }) => {
  return (
    <Wrapper
      shadow="xs"
      border="xs"
      borderRadius="md"
      direction="column"
      gap="md"
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export const Card = Object.assign(_Card, {
  Title,
  Content,
  Action,
});
