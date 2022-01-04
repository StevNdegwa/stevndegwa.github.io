import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../styles";

export const DropDownWrapper = styled.div`
width: fit-content;
height: fit-content;
position: relative;
`;

export const DropDownItems = styled(motion.ul)`
${({ theme, highlighted }: { theme: ThemeType, highlighted: number }) => css`
position: absolute;
top:100%;
left:0;
z-index:-1;
list-style-type:none;
border-radius:0.5rem;
overflow:hidden;
background-color:var(--bgColor);
box-shadow: 0px 5px 13px var(--shadowColor);
& > li{
  padding: 0.3rem 0.5rem;
  cursor:pointer;
  &:hover{
    background-color:${theme.colors.grey[50]};
  }
  &:nth-of-type(${highlighted}){
    font-weight: bold;
  }
}
`}
`;