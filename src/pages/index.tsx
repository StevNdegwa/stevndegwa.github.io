import React, { useCallback, useRef } from "react"
import styled, { css } from "styled-components"
import code from "../images/code.jpg"
import { ThemeType } from "../styles"
import { PageLayout, SectionContainer } from "../components"

import {
  IntroSection,
  ContactMeSection,
  WhatIDoSection,
  MySkills,
  BadgesCertifications,
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
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      & div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div {
        width: 200px;
        height: 200px;
        margin: 50px;
        border-radius: 50%;
        border: 8px dashed ${theme.colors.grey[500]};
        position: absolute;
        bottom: 300px;
        left: calc(50% - 100px);
        animation-duration: 10s;
        animation-iteration-count: infinite;
        & > div {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          border: 8px solid ${theme.colors.grey[500]};
          border-bottom-color: transparent;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          & > div {
            width: 40%;
            height: 40%;
            border-radius: 50%;
            border: 8px solid ${theme.colors.grey[500]};
            background-color: ${theme.colors.grey[500]};
          }
        }
      }
    }
    @media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width: ${theme.desktop2}) {
      clip-path: polygon(
        0 0,
        0 300px,
        calc(50% - 400px) 600px,
        58% 500px,
        90% 0
      );
      & > div {
        width: 150px;
        height: 150px;
        bottom: 350px;
      }
    }

    @media only screen and (min-width: ${theme.desktop1}) {
      @keyframes show {
        from {
          box-shadow: 0px 0px 25px 15px rgb(44, 62, 65);
          transform: skew(2deg) translate(8px, -8px);
        }
        to {
          box-shadow: 0px 0px 15px 15px rgb(44, 62, 80);
          transform: skew(0deg) translate(0px, 0px);
        }
      }
      & > section {
        width: 350px;
        height: 350px;
        margin: 80px;
        border-radius: 25% 50%;
        background-image: url(${code});
        background-repeat: no-repeat;
        cursor: pointer;
        border: 8px dashed rgb(44, 62, 80);
        animation-name: show;
        animation-duration: 1s;
        animation-direction: alternate-reverse;
        animation-iteration-count: infinite;
      }
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
`;

const Quote = styled.q`
  font-size: 2rem;
  display: block;
  text-align: center;
  margin: auto;
  padding: 1re 3rem;
  font-family: var(--font2);
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
      <TopBg>
        {/* <div /> */}
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </TopBg>
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
        <Quote>
        It is through practice in the small that professionals gain proficiency
        and trust for practice in the large
      </Quote>
      </SectionContainer>
      <SectionContainer>
        <ContactMeSection ref={contacts} />
      </SectionContainer>
      <BadgesCertifications />
    </PageLayout>
  )
}

export default IndexPage
