import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Title } from "./Title";
import { Item } from "./Item";
import { ItemsContainer, Wrapper } from "./styles";

export const WhatIdo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          list
        }
      }
    }
  `);

  if (!data?.allDataJson?.nodes?.[0]?.list) {
    return null;
  }

  return (
    <Wrapper>
      <Title />
      <ItemsContainer>
        {data.allDataJson.nodes[0].list.map((item: string, index: number) => (
          <Item key={index} label={item} />
        ))}
      </ItemsContainer>
    </Wrapper>
  );
};
