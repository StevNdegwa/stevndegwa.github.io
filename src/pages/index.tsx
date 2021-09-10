import React, { useCallback, useRef } from "react"
import styled, { css } from "styled-components"
import top_fixed_bg from "../images/top_fixed_bg.png"
import { ThemeType } from "../styles"
import { PageLayout, SectionContainer } from "../components"

import {
  IntroSection,
  ContactMeSection,
  WhatIDoSection,
} from "../components/home"

const TopBg = styled.div`
  ${({ theme }: { theme: ThemeType }) => css`
    display: none;
    @media only screen and (min-width: ${theme.tabletBreakdown2}) {
      display: block;
      max-width: 1920px;
      width: 100%;
      height: 900px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-51%);
      z-index: -1;
      background-image: url(${top_fixed_bg});
      background-repeat: no-repeat;
      background-size: 1430px 820px;
    }
    @media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width: ${theme.desktop1}) {
      background-size: 1024px 587px;
    }

    @media only screen and (min-width: ${theme.desktop1}) and (max-width: ${theme.desktop2}) {
      background-size: 1190px 630px;
    }
    @media only screen and (min-width: ${theme.desktop2}) and (max-width: ${theme.desktop3}) {
      background-size: 1350px 774px;
    }
  `}
`

const IndexPage = () => {
  const contacts = useRef<HTMLDivElement | null>(null)

  const moveToContactsSection = useCallback(() => {
    if (contacts.current) {
      contacts.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [contacts])

  return (
    <PageLayout>
      <TopBg />
      <SectionContainer>
        <IntroSection />
      </SectionContainer>
      <SectionContainer>
        <WhatIDoSection moveToContactsSection={moveToContactsSection} />
      </SectionContainer>
      <SectionContainer>
        <ContactMeSection ref={contacts} />
      </SectionContainer>
    </PageLayout>
  )
}

export default IndexPage
