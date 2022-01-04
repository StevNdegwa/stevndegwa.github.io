import { createGlobalStyle, css } from "styled-components";
import { ThemeType, ThemeMode } from "./theme";

export default createGlobalStyle`
${({ theme, mode }: { theme: ThemeType, mode: ThemeMode }) => css`
:root{
  --font2: "Merienda", cursive;
${mode === "DARK"
      ?
      css`
  --bgColor: ${theme.colors.dark};
  --textColor: white;
  --badgesAndCertificationBg: ${theme.colors.dark};
  --shadowColor: ${theme.colors.grey[600]};
  --badgesCertificationCardBg: hsla(360, 100%, 100%, 0.1);
  --inputBg: ${theme.colors.grey[900]};
`
      :
      css`  
  --bgColor: white;
  --textColor: ${theme.colors.dark};
  --badgesAndCertificationBg: ${theme.colors.grey[100]};
  --whatIdoSectionCard: hsla(360, 100%, 100%, 0.8);
  --shadowColor: ${theme.colors.grey[100]};
  --badgesCertificationCardBg: hsla(360, 100%, 100%, 0.4);
  --inputBg: ${theme.colors.grey[50]};
`}
}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition: background-color 300ms;
}
body{
  font-family: 'Roboto', sans-serif;
  color: var(--textColor);
  background-color:var(--bgColor);
}
button{
  cursor:pointer;
}
ul {
  list-style: points;
}
textarea, input{
display:block;
font:inherit;
color:inherit;
font-size:1.3rem;
border:none;
background-color: var(--inputBg);
padding:0.4rem;
border-radius:5px;
transition:border 100ms;
&:focus{
  outline: none;
  border: 1px solid ${theme.colors.tertiary[400]};
}
}
::-webkit-scrollbar{
  width:5px;
  background:white;
}
::-webkit-scrollbar-track{
  border-radius:10px;
}
::-webkit-scrollbar-thumb{
  background:${theme.colors.dark};
}
`}
`;