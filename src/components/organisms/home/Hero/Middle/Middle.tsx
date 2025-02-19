import React from "react";
import { GrGithub } from "react-icons/gr";
import stephen from "@assets/images/stephen.svg";
import {
  Intro,
  Wrapper,
  Stephen,
  AboutCard,
  AboutCardShadow,
  AboutCardBg,
  AboutCardLink,
} from "./styles";
import { Text } from "@components/atoms";
import { FlexBox } from "@components/molecules";

export const Middle = () => {
  return (
    <Wrapper direction="column" gap="xxl">
      <Stephen src={stephen} alt="stephen" />
      <Intro>
        <AboutCard>
          <AboutCardShadow />
          <AboutCardBg>
            <FlexBox direction="column" gap="xs">
              <Text heading="h4" size="xl">
                Hello 👋,
              </Text>
              <Text element="p" size="xxl">
                I’m a software engineer. <br />I specialize in UI development
              </Text>
            </FlexBox>
          </AboutCardBg>
          <AboutCardLink href="https://github.com/StevNdegwa" target="_blank">
            <GrGithub size={50} />
          </AboutCardLink>
        </AboutCard>
      </Intro>
    </Wrapper>
  );
};
