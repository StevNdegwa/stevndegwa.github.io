import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "motion/react";


export const Wrapper = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  position: relative;
`;

export const ActiveLinkIndicator  = styled.svg`
position: absolute;
top: 110%;
right: 0;
`