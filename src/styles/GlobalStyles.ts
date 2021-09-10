import { createGlobalStyle, css } from "styled-components";
import { ThemeType } from "./theme";

export default createGlobalStyle`
${({ theme }: { theme: ThemeType }) => css`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family: 'Roboto', sans-serif;
  color: ${theme.colors.dark};
  background-color:white;
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
background-color: ${theme.colors.grey[50]};
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