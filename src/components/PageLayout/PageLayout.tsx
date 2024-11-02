/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import React from "react"
import { Header } from "../Header"
import { GlobalStyle } from "../GlobalStyle"
import { Wrapper, Main } from "./styles"

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <>
    <GlobalStyle/>
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
    </Wrapper>
  </>
}
