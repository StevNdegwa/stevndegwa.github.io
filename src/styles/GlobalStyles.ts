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
}
button{
  cursor:pointer;
}
`}
`;