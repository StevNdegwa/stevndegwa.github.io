import { Box } from "@components/atoms";
import { FlexBox } from "@components/molecules";
import { motion } from "motion/react";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: auto;
  padding: 1rem;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--dark-color-transparent-05);

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

export const ContactForm = styled(Box)`
  width: calc(100% - 350px);
  height: auto;
  padding: 1rem 4rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding-top: 1rem;
`;
