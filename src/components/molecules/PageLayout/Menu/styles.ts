import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../styles";

export const MenuWrapper = styled(motion.nav)`
${({ theme }: { theme: ThemeType }) => css`
height:0px;
border-top: 1rem solid hsla(210, 29%, 24%, 100%);
max-height:100vh;
overflow:hidden;
width:100%;
position:fixed;
top:0;
left:0;
z-index:${theme.zIndices.popover};
background-color:white;
font-family: 'Merienda', cursive;
`}
`;

export const MenuHeader = styled.header`
${({ theme }: { theme: ThemeType }) => css`
height:4rem;
display:flex;
justify-content:flex-end;
align-items:center;
padding:0 1rem;
& button{
  color:${theme.colors.dark};
}
@media only screen and (min-width: ${theme.tabletBreakdown2}){
  padding: 0 2rem;
  height:6rem;
}
`}
`;

export const MenuLinks = styled.main`
height:calc(100% - 8rem);
&>ul{
  display:flex;
  flex-direction:column;
  &>li{
    padding-right:4rem;
    line-height:5rem;
    font-size:2.5rem;
    display:flex;
    justify-content:flex-end;
    color: hsla(210, 29%, 24%, 1);
    &:hover{
      color: hsla(145, 61%, 59%, 1);
      & > span{
        display:inline-block;
        width: 50px;
      }
    }
    & > a{
      text-decoration:none;
      color: inherit;
    }
    &>span{
        display:inline-block;
        width:0px;
        overflow:hidden;
        transition: width 500ms;
    }
  }
}
`;

export const MenuFooter = styled.footer`
width:100%;
line-height:2rem;
text-align:right;
padding:0 2rem;
`;