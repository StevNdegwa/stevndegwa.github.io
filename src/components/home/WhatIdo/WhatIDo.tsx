import React, { FC } from "react";
import { Item } from "./Item";
import { ItemsContainer, Wrapper, Title } from "./styles";

export const WhatIdo: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Wrapper>
      <Title>WHAT I DO</Title>
      <ItemsContainer>
        {list.map((item: string, index: number) => (
          <Item key={index} label={item} />
        ))}
      </ItemsContainer>
    </Wrapper>
  );
};
