import React from "react";
import { Wrapper } from "./styles";
import { ContentWrapper } from "@components/molecules";

export const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <p>Copyright @ {new Date().getFullYear()}</p>
      </ContentWrapper>
    </Wrapper>
  );
};
