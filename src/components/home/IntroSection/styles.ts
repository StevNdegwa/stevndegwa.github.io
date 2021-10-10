import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const IntroSectionWrapper = styled.section`
${({ theme }: { theme: ThemeType }) => css`
  width: 100%;
  height: 250px;
  color: white;
  background-color: ${theme.colors.dark};
  @media only screen and (min-width: ${theme.tabletBreakdown2}){
    color: white;
    background-color: transparent;;
  }
  @media only screen and (min-width: ${theme.desktop2}){
    height:350px;
  }
`}
`;


export const IntroSectionName = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  display: flex;
  margin:auto;
  & > div {
    padding: 0.5rem;
    width: 230px;
    &:first-of-type {
      text-align: right;
      & > div {
        &:first-of-type {
          font-size: 1.4rem;
          text-align: left;
          color:white;
          border-bottom: 4px double currentColor;
        }
        @keyframes animatedGradient {
          from {
            background-size: 100%;
          }
          to {
            background-size: 250%;
          }
        }
        &:last-of-type {
          font-size: 3rem;
          font-weight: bolder;
          background:linear-gradient(to right, #C6FFDD, #FBD786, #f7797d);
          background-clip:text;
          -webkit-background-clip:text;
          color:transparent;
          animation: animatedGradient 1s infinite ease;
          animation-direction: alternate;
        }
      }
    }
    &:last-of-type {
      text-align: left;
      font-size: 1.3rem;
      font-family: "Merienda", cursive;
      color: hsla(200, 16%, 62%, 1);
      & > span {
        font-weight: 600;
      }
    }
  }
  @media only screen and (min-width: ${theme.phoneBreakdown}) and (max-width: ${theme.tabletBreakdown1}){
    width: 390px;
      & > div {
        &:first-of-type {
          width: 270px;
          & > div {
            &:first-of-type {
              font-size: 1.4rem;
            }
            &:last-of-type {
              font-size: 3.8rem;
            }
          }
        }
      }
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}){
    width: 450px;
    & > div {
      &:first-of-type {
        width: 320px;
        & > div {
          &:first-of-type {
            font-size: 1.5rem;
          }
          &:last-of-type {
            font-size: 4.5rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}){
    width: 470px;
    & > div {
      &:first-of-type {
        width: 350px;
        & > div {
          &:first-of-type {
            font-size: 1.4rem;
          }
          &:last-of-type {
            font-size: 4rem;
            line-height: 1;
          }
        }
      }
    }
  }
`}
`;
