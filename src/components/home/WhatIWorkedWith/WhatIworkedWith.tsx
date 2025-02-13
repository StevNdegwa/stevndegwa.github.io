import React, { FC } from "react";
import { List, StyledContent, Title, Wrapper } from "./styles";

export const WhatIWorkedWith: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Wrapper>
      <Title>
        <span className="top">TOOLS AND TECHNOLOGIES</span>{" "}
        <span className="bottom">I HAVE WORKED WITH</span>
      </Title>
      <StyledContent>
        <List>
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      </StyledContent>
    </Wrapper>
  );
};
