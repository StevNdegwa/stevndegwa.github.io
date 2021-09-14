import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const PageLayoutWrapper = styled.div`
width:100%;
min-height:100vh;
border-top: 1rem solid hsla(210, 29%, 24%, 100%);
border-bottom: 1rem solid hsla(210, 29%, 24%, 100%);
position:relative;
overflow:hidden;
`;

export const PageContent = styled.div`
margin:auto;
`;

export const SkipToContent = styled.button`
${({ theme }: { theme: ThemeType }) => css`
position:fixed;
top:0;
left:0;
border:none;
padding: 0.5rem 1rem;
background-color:transparent;
color:transparent;
font-weight:600;
font-size:1.2rem;
&:focus{
  background-color: ${theme.colors.grey[100]};
  color:inherit;
}
`}
`;