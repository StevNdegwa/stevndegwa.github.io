import React, { useCallback, useRef } from "react"
import styled, { css } from "styled-components"
import top_fixed_bg from "../images/top_fixed_bg.png"
import { ThemeType } from "../styles"
import { PageLayout, SectionContainer } from "../components"

import {
  IntroSection,
  ContactMeSection,
  WhatIDoSection,
  MySkills,
} from "../components/home"

const TopBg = styled.div`
  ${({ theme }: { theme: ThemeType }) => css`
    display: none;
    @media only screen and (min-width: ${theme.tabletBreakdown2}) {
      display: block;
      width: 100vw;
      height: 900px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-51%);
      z-index: -1;
      background-color: ${theme.colors.dark};
      clip-path: polygon(
        0 0,
        0 500px,
        calc(50% - 450px) 850px,
        58% 600px,
        80% 0
      );
    }
    @media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width: ${theme.desktop2}) {
      clip-path: polygon(
        0 0,
        0 300px,
        calc(50% - 400px) 600px,
        58% 500px,
        90% 0
      );
    }

    @media only screen and (min-width: ${theme.desktop1}) and (max-width: ${theme.desktop2}) {
    }
    @media only screen and (min-width: ${theme.desktop2}) and (max-width: ${theme.desktop3}) {
      clip-path: polygon(
        0 0,
        0 400px,
        calc(50% - 450px) 750px,
        65% 500px,
        90% 0
      );
    }
  `}
`

const IndexPage = () => {
  const contacts = useRef<HTMLFormElement | null>(null)

  const moveToContactsSection = useCallback(() => {
    if (contacts.current) {
      contacts.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [contacts])

  const skipToContent = useCallback(() => {
    document.getElementById("what_I_do")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <PageLayout skipToContent={skipToContent}>
      <TopBg />
      <SectionContainer>
        <IntroSection />
      </SectionContainer>
      <SectionContainer>
        <WhatIDoSection moveToContactsSection={moveToContactsSection} />
      </SectionContainer>
      <SectionContainer>
        <MySkills />
      </SectionContainer>
      <SectionContainer>
        <ContactMeSection ref={contacts} />
      </SectionContainer>
    </PageLayout>
  )
}

export default IndexPage
