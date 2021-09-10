import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles";

export const HeaderWrapper = styled.header`
${({ theme }: { theme: ThemeType }) => css`
  width:100%;
  height:4rem;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  padding:0 1rem;
  background-color: ${theme.colors.dark};
  & > a, button{
    color:white;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}){
    padding: 0 2rem;
    height:6rem;
    background-color:transparent;
    & > button{
      color:${theme.colors.secondary[400]};
    }
    & > a{
      color:${theme.colors.dark};
    }
  }
`}
`;