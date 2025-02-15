import React, { FC } from "react";
import { List, Wrapper } from "./styles";
import { Section } from "../Section";

export const WhatIWorkedWith: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Section title="WHAT I HAVE WORKED WITH">
      <Wrapper>
        <List>
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      </Wrapper>
    </Section>
  );
};
