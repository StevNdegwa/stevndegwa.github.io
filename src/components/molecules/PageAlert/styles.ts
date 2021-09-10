import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const PageAlertWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
position:fixed;
top:0;
left:0;
z-index:${theme.zIndices.tooltip};
background-color: hsla(206, 7%, 55%, 0.5);
color: white;
display:flex;
align-items:center;
justify-content:space-between;
padding:0.5rem;
min-height:2rem;
&>button{
  background-color:transparent;
  border:none;
  color:white;
}
`}
`;
