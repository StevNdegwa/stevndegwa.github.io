import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const WhatIDoSectionWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width 100%;
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width:${theme.tabletBreakdown2}){
    height:450px;
    display:flex;
    justify-content:space-between;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}){
    height:650px;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`}
`;

export const LeftSide = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
margin-bottom:40px;
@media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width:${theme.tabletBreakdown2}){
  width: 400px;
}
@media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
  width: 450px;
  display:grid;
  grid-template-columns: repeat(9, 50px);
  grid-template-rows: repeat(18, 25px);
  grid-template-areas:
    'web_design web_design web_design web_design . . . . .'
    'web_design web_design web_design web_design . . . . .'
    'web_design web_design web_design web_design . . . . .'
    'web_design web_design web_design web_design . . . . .'
    'web_design web_design web_design web_design . . . . .'
    'web_design web_design web_design web_design . web_development web_development web_development web_development'
    'web_design web_design web_design web_design . web_development web_development web_development web_development'
    'web_design web_design web_design web_design . web_development web_development web_development web_development'
    '. . . . . web_development web_development web_development web_development'
    '. . . . . web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization . . . . .'
    'data_visualization data_visualization data_visualization data_visualization . . . . .'
    'data_visualization data_visualization data_visualization data_visualization . . . . .'
    'data_visualization data_visualization data_visualization data_visualization . . . . .'
    'data_visualization data_visualization data_visualization data_visualization . . . . .';
}
@media only screen and (min-width: ${theme.desktop2}){
  width: 690px;
  height:100%;
  display:grid;
  grid-template-columns: repeat(13, 50px);
  grid-template-rows: repeat(26, 25px);
  grid-template-areas:
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . . . . . . .'
    'web_design web_design web_design web_design web_design web_design . web_development web_development web_development web_development web_development web_development'
    'web_design web_design web_design web_design web_design web_design . web_development web_development web_development web_development web_development web_development'
    'web_design web_design web_design web_design web_design web_design . web_development web_development web_development web_development web_development web_development'
    'web_design web_design web_design web_design web_design web_design . web_development web_development web_development web_development web_development web_development'
    '. . . . . . . web_development web_development web_development web_development web_development web_development'
    '. . . . . . . web_development web_development web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . web_development web_development web_development web_development web_development web_development'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    'data_visualization data_visualization data_visualization data_visualization data_visualization data_visualization . . . . . . .'
    ;
}
`}
`;


export const RightSide = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:90%;
margin:auto;
&>h1{
  font-size:2rem;
}
&>ul{
  &>li{
    font-size: 1.2rem;
    margin: 1rem 2rem;
  }
}
@media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}){
  width:fit-content;
  &>h1{
    font-size:2.5rem;
  }
  &>ul{
    &>li{
      font-size: 1.3rem;
      margin: 1.2rem 1.2rem;
    }
  }
}
@media only screen and (min-width: ${theme.tabletBreakdown2}){
  min-width:490px;
  width:fit-content;
  height:490px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin:0;
  &>h1{
    font-size:3rem;
  }
  &>ul{
    &>li{
      font-size: 1.8rem;
      margin: 1.5rem 1.5rem;
    }
  }
}
@media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
  width:390px;
  min-width:0px;
}
`}
`;
