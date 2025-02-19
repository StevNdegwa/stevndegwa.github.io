import React from "react";
import { Item } from "./styles";
import { FlexBox } from "@components/molecules";

export const Top: React.FC = () => {
  return (
    <FlexBox gap="xs">
      <Item style={{ backgroundColor: "var(--primary-color)" }} />
      <Item style={{ backgroundColor: "var(--secondary-color)" }} />
      <Item style={{ backgroundColor: "var(--dark-color)" }} />
    </FlexBox>
  );
};
