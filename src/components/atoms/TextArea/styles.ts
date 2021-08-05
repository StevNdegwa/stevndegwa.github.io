import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const TextAreaWrapper = styled.textarea`
${({ theme }: { theme: ThemeType }) => css`
display:block;
height:3rem;
width:100%;
max-width:100%;
border:none;
background-color: ${theme.colors.grey[50]};
padding:0.4rem;
&:focus{
  outline: 2px solid ${theme.colors.tertiary[400]};
}
`}
`;