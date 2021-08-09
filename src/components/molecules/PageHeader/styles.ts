import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const PageHeaderWrapper = styled.header`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
background-color: ${theme.colors.dark};
color:white;
height:4.5rem;
display:flex;
align-items:center;
padding:0 1rem;
font-size:2.5rem;
font-weight:600;
font-family: 'Merienda', cursive;
`}
`;