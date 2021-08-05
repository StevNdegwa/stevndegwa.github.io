import styled, { css } from "styled-components";

import { ThemeType } from "../../../styles";

export const IntroSectionWrapper = styled.section`
${({ theme }: { theme: ThemeType }) => css`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 340px 10%;
  grid-template-rows: 1fr 300px 300px;
  background-repeat:no-repeat;
  background-position:center;
  background-size:100% auto;
  & > div {
    grid-column: 2 /span 1;
    grid-row: 2 /span 1;
    display: flex;
    & > div {
      padding: 0.5rem;
      width: 230px;
      &:first-of-type {
        text-align: right;
        & > div {
          &:first-of-type {
            font-size: 1.4rem;
            color: hsla(145, 61%, 59%, 1);
            text-align: left;
            border-bottom: 4px double hsla(145, 61%, 59%, 1);
          }
          &:last-of-type {
            font-size: 3rem;
            font-weight: bolder;
          }
        }
      }
      &:last-of-type {
        width: 100px;
        text-align: left;
        font-size: 1.3rem;
        font-family: "Merienda", cursive;
        color: hsla(200, 16%, 62%, 1);
        & > span {
          font-weight: 600;
        }
      }
    }
  }
  @media only screen and (min-width: ${theme.phoneBreakdown}) and (max-width: ${theme.tabletBreakdown1}) {
  grid-template-columns: 1fr 390px 15%;
  height:650px;  
  & > div {
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
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}) {
  grid-template-columns: 1fr 450px 18%;
  height:680px;  
  & > div {
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
  }

  @media only screen and (min-width: ${theme.tabletBreakdown2}) {
  grid-template-columns: 1fr 470px 20%;
  height:720px;  
  & > div {
      width: 470px;
      & > div {
        &:first-of-type {
          width: 350px;
          & > div {
            &:first-of-type {
              font-size: 1.8rem;
            }
            &:last-of-type {
              font-size: 5rem;
            }
          }
        }
      }
    }
  }
`
  }`;
