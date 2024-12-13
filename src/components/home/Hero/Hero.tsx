import React from "react";
import { Top } from "./Top";
import { Middle } from "./Middle";
import { Wrapper } from "./style";

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Top />
      <Middle />
    </Wrapper>
  );
};
