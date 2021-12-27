import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles";

export const HeaderWrapper = styled.header`
${({ theme }: { theme: ThemeType }) => css`
  width:100%;
  height:4rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 1rem;
  background-color: ${theme.colors.dark};
  & span{
    display: inline-flex;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}){
    padding: 0 2rem;
    height:6rem;
    background-color:transparent;
    & > span:last-of-type{
      & a{
        color:${theme.colors.dark};
      }
    }
  }
  @media only screen and (max-width: ${theme.tabletBreakdown2}){
    & > span:last-of-type{
      & button{
        color:white;
      }
    }
  }
`}
`;