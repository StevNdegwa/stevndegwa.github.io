import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles";

export const HeaderWrapper = styled.header`
${({ theme }: { theme: ThemeType }) => css`
  width:100%;
  height:6rem;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  padding:0 1rem;
  @media only screen and (min-width: ${theme.phoneBreakdown}){
    padding: 0 2rem;
  }
`}
`;