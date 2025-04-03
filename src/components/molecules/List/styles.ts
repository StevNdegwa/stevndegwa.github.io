import { Box } from "@components/atoms";
import styled from "styled-components";

export const Wrapper = styled.ul<{ $show: boolean }>`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: height 0.3s ease-in-out;
  ${({ $show }) => `
    height: ${$show ? "auto" : "0"};
    overflow: hidden;
    margin: ${$show ? "100px 0" : "0"};
  `};
`;
