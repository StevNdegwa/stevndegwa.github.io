import React from "react";
import { Top } from "./Top";
import { Middle } from "./Middle";
import { ContentWrapper } from "@components/molecules";

export const Hero: React.FC = () => {
  return (
    <ContentWrapper gap="lg">
      <Top />
      <Middle />
    </ContentWrapper>
  );
};
