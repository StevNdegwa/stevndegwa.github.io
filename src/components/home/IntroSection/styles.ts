import styled, { css } from "styled-components";

import { ThemeType } from "../../../styles";

import { Button } from "../../atoms";

export const IntroSectionWrapper = styled.section`
${({ theme }: { theme: ThemeType }) => css`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 340px 100px;
  grid-template-rows: 1fr 300px 40px 200px;
  background-repeat:no-repeat;
  background-position:center;
  background-size:100% auto;
  @media only screen and (min-width: ${theme.phoneBreakdown}) and (max-width: ${theme.tabletBreakdown1}) {
    grid-template-columns: 1fr 390px 15%;
    height:600px;  
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}) {
    grid-template-columns: 1fr 450px 18%;
    height:680px;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}) {
    grid-template-columns: 1fr 470px 20%;
    height:620px;
  }
`}
`;


export const IntroSectionName = styled.div`
${({ theme }: { theme: ThemeType }) => css`
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
            font-size: 1.8rem;
          }
          &:last-of-type {
            font-size: 5rem;
          }
        }
      }
    }
  }
`}
`;


export const IntroSectionThingsIDo = styled.div`
${({ theme }: { theme: ThemeType }) => css`
grid-column: 1 /span 3;
grid-row: 4 /span 1;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
color:${theme.colors.grey[200]};
font-size:1rem;
font-weight:600;
font-family: "Merienda", cursive;
&>div{
  border:1px dashed currentColor;
  padding:0.2rem;
  margin:0.3rem;
}
@media only screen and (min-width: ${theme.phoneBreakdown}) and (max-width:${theme.tabletBreakdown1}){
  font-size:1.3rem;
}
@media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width:${theme.tabletBreakdown2}){
  font-size:1.6rem;
}
@media only screen and (min-width: ${theme.tabletBreakdown2}){
  font-size:2rem;
}
`}
`;

export const LetsTalkBtn = styled(Button)`
grid-column: 2 /span 1;
grid-row: 3 /span 1;
width:fit-content;
height:fit-content;
align-self:end;
justify-self:end;
padding:1rem 3rem;
`;
