import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const ComboBoxWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
height:fit-content;
position:relative;
`}
`;

export const ComboBoxControl = styled.button`
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
height:fit-content;
font-size:1.2rem;
border:none;
`;

export const ComboBoxList = styled.ul`
${({ expanded, theme }: { expanded: boolean; theme:ThemeType }) => css`
list-style-type:none;
position:absolute;
top:100%;
left:0;
box-shadow:0px 2px 2px ${theme.colors.grey[100]};
`}
`;