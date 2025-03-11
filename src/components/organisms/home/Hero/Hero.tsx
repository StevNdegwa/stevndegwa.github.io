import React from "react";
import { Top } from "./Top";
import { Middle } from "./Middle";
import { ContentWrapper, FlexBox } from "@components/molecules";
import { Text } from "@components/atoms";

export const Hero: React.FC = () => {
  return (
    <ContentWrapper gap="lg">
      <Top />
      <Middle />
    </ContentWrapper>
  );
};
