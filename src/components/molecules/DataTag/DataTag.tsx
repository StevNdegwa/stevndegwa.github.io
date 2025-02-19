import React from "react";
import { Wrapper } from "./styles";

export const DataTag: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Wrapper borderRadius="lg" align="center">
      {label}
    </Wrapper>
  );
};
