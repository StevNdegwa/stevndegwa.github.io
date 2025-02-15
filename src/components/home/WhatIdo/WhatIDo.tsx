import React, { FC } from "react";
import { Item } from "../Item";
import { Wrapper } from "./styles";
import { Section } from "../Section";

export const WhatIdo: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Section title="What I do">
      <Wrapper>
        {list.map((item: string, index: number) => (
          <Item key={index} label={item} />
        ))}
      </Wrapper>
    </Section>
  );
};
