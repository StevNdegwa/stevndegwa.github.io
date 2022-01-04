import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const ContactMeSectionWrapper = styled.form`
${({ theme }: { theme: ThemeType }) => css`
  width:100%;
  @media only screen and (min-width: ${theme.tabletBreakdown1}){
    height: 400px;
    display:flex;
    justify-content:space-between;
  }
`}
`;

export const LeftSide = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width: 90%;
  margin:auto;
  &>h1{
    color: ${theme.colors.primary[400]};
    height:50px;
    line-height:50px;
    &>span:first-of-type{
      font-size: 1.2rem;
    }
    &>span:last-of-type{
      font-size: 1.5rem;
    }
  }
  & > ul{
    list-style-type:none;
    font-size:1.3rem;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}){
    width: 430px;
    height:420px;
    margin:0px;
    &>h1{
      height:80px;
      line-height:80px;
      &>span:first-of-type{
        font-size: 1.5rem;
      }
      &>span:last-of-type{
        font-size: 2rem;
      }
    }
    & > ul{
      display:flex;
      height: 150px;
      flex-direction:column;
      justify-content:space-between;
      font-size:2rem;
      margin-left:50px;
    }
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}){
    width: 430px;
  }
`}
`

export const RightSide = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width:90%;
  margin:auto;
  &>div{
    margin-bottom:1rem;
  }
  &>button{
    margin:10px;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}){
    width: 500px;
    height:350px;
    margin:0px;
    &>div{
      margin-bottom:2rem;
    }
  }
  @media only screen and (min-width: ${theme.tabletBreakdown1}) and (max-width: ${theme.tabletBreakdown2}){
    width: 400px;
    &>div{
      margin-bottom:1rem;
    }
  }
`}
`
