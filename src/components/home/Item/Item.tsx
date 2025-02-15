import React, { FC } from "react";
import { Icon, Wrapper } from "./styles";

export const Item: FC<{ label: string }> = ({ label }) => {
  return (
    <Wrapper>
      <Icon />
      {label}
    </Wrapper>
  );
};
