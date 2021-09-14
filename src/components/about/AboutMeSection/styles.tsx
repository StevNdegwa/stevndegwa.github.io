import styled, { css } from "styled-components"
import { ThemeType } from "../../../styles"

export const AboutMeSectionWrapper = styled.div`
  with: 100%;
`
export const AboutMeSectionTitle = styled.h3`
  ${({ theme }: { theme: ThemeType }) => css`
    height: 1rem;
    margin: 2rem 0;
    vertical-align: middle;
    color: ${theme.colors.primary[400]};
    & > .icon {
      font-size: 1.3rem;
      margin-right: 1rem;
      color: ${theme.colors.dark};
    }
  `}
`
