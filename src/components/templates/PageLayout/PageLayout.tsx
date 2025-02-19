/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import React, { useEffect } from "react";
import { Header, Footer } from "@components/organisms";
import { GlobalStyle } from "@components/atoms";
import { Wrapper, Main } from "./styles";

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  useEffect(() => {
    const gatsbyElement = document.getElementById("___gatsby");

    if (gatsbyElement) {
      gatsbyElement.id = "body";
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
};
