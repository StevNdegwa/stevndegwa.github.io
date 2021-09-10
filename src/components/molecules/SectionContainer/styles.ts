import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const SectionContainerWrapper = styled.section`
${({ theme }: { theme: ThemeType }) => css`
  max-width: 1440px;
  width:100%;
  margin: 0 auto;
  margin-bottom:50px;
  transform: translate(0px, 200px);
  transition: transform 1000ms;
  transition-timing-function: ease-in-out;
  @media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
    margin-bottom:100px;
  }
  @media only screen and (min-width: ${theme.desktop2}){
    margin-bottom:200px;
  }
`}
`;
