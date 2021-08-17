import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles";

export const FooterWrapper = styled.footer`
${({ theme }: { theme: ThemeType }) => css`
background-color: ${theme.colors.dark};
`}
`;


export const FooterTop = styled.div`
height:140px;
`;

export const FooterBottom = styled.div`
${({ theme }: { theme: ThemeType }) => css`
height:80px;
max-width:80%;
margin:auto;
color:white;
padding:0.5rem;
border-top:1px solid ${theme.colors.grey[200]};
`}
`;
