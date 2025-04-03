import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "motion/react";

export const Wrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  position: relative;

  & > span {
    @media only screen and (max-width: 400px) {
      font-size: 1.2rem !important;
    }
    @media only screen and (max-width: 300px) {
      font-size: 1.4rem !important;
    }
  }
`;

export const ActiveLinkIndicator = styled(motion.div)<{
  $isActiveLink: boolean;
}>`
  position: absolute;
  left: 0px;
  width: 90%;
  height: 12px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--secondary-color) transparent transparent transparent;
  border-radius: 250%/100px 30px 0 0;
  display: ${(props: any) => (props.$isActiveLink ? "block" : "none")};
  @media (forced-colors: active) and (prefers-color-scheme: dark) {
    border-color: Highlight Canvas Canvas Canvas;
  }
  @media (forced-colors: active) and (prefers-color-scheme: light) {
    border-color: Highlight Canvas Canvas Canvas;
  }
`;
