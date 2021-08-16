import styled, { css } from "styled-components";
import { ThemeType } from "../../styles";

export const AboutSectionTitle = styled.h3`
  line-height:4rem;
  padding-left: 3rem;
  vertical-align:middle;
  ${({ theme }: { theme: ThemeType }) => css`
    color: ${theme.colors.primary[400]};
  `}
  & >.icon{
    font-size:1.3rem;
    margin-right:1rem;
  }
`;
