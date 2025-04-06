import { Box } from "@components/atoms";
import { FlexBox } from "@components/molecules";
import { motion } from "motion/react";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 1rem;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--dark-color-transparent-05);
  display: flex;
  gap: 2rem;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 350px;
  height: 100%;
  min-height: 450px;
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`;

export const ContactForm = styled(FlexBox)`
  width: calc(100% - 350px);
  height: auto;
  padding: 1rem 4rem;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding-top: 1rem;
`;

export const FormLoader = styled(FlexBox)<{ $show: boolean }>`
  ${({ $show }) => ($show ? "display: flex;" : "display: none;")}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-color-transparent-2);
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-lg);

  & > div.loader {
    width: 96px;
    height: 96px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: "";
      box-sizing: border-box;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: 16px solid var(--dark-color);
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }
    &::after {
      animation-delay: 1s;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
`;
