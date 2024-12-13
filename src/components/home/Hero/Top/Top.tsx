import React from "react";
import { Item, Wrapper } from "./styles";

export const Top: React.FC = () => {
  return (
    <Wrapper>
      <Item style={{ backgroundColor: "var(--primary-color)" }} />
      <Item style={{ backgroundColor: "var(--text-color)" }} />
      <Item style={{ backgroundColor: "var(--primary-color)" }} />
    </Wrapper>
  );
};
