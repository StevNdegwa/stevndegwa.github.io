import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuWrapper = styled(motion.nav)`
height:0px;
overflow:hidden;
width:100%;
position:absolute;
top:0;
left:0;
z-index:1000;
background-color:white;
font-family: 'Merienda', cursive;
border-bottom: 1px solid hsla(200, 16%, 62%, 1);
box-shadow:0px 3px 4px hsla(204, 15%, 94%, 1);
`;

export const MenuHeader = styled.header`
height:6rem;
display:flex;
justify-content:flex-end;
align-items:center;
padding:0 4rem;
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
      & > div{
        display:flex;
      }
    }
    & > a{
      text-decoration:none;
      color: inherit;
    }
    &>div{
        display:flex;
        align-items:center;
        justify-content:center;
        display:none;
      &>div{
        position:relative;
        height:1.5rem;
        width:5rem;
        &>div:first-of-type{
          position:absolute;
          top:0;
          left:0;
          width:1.1rem;
          height:1.3rem;
          border-left:1px solid currentColor;
          border-bottom: 1px solid currentColor;
          transform:rotate(45deg);
        }
        &>div:last-of-type{
          position:absolute;
          top:45%;
          left:-5px;
          width:4rem;
          border-bottom:1px solid currentColor;
        }
      }
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