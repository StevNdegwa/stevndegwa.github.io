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

export const ActiveLinkIndicator = styled(motion.div)`
  position: absolute;
  right: -10px;
  width: 90%;
  height: 12px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--primary-color) transparent transparent transparent;
  border-radius: 250%/100px 30px 0 0;
  display: ${({ isActiveLink }: { isActiveLink: boolean }) => isActiveLink ? "block" : "none"};
  @media (forced-colors: active) and (prefers-color-scheme: dark) {
    border-color: Highlight Canvas Canvas Canvas;
  }
  @media (forced-colors: active) and (prefers-color-scheme: light) {
    border-color: Highlight Canvas Canvas Canvas;
  }
`