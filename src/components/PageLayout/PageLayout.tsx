/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import React, { useEffect } from "react";
import { Header } from "../Header";
import { GlobalStyle } from "../GlobalStyle";
import { Wrapper, Main } from "./styles";
import { Footer } from "../Footer";

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
