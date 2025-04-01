import { Text } from "@components/atoms";
import { FlexBox } from "@components/molecules";
import React from "react";
import { Section } from "../Section";

export const AboutMe = () => {
  return (
    <Section>
      <FlexBox direction="column" gap="xs">
        <Text heading="h2" weight="bold" size="xxxl">
          About Me
        </Text>
        <Text element="p" size="lg">
          I have around 9 years of software development experience, including 5
          years of professional work.
        </Text>
        <Text element="p" size="lg">
          I've specialized in building scalable and high-performance web
          applications using modern frontend libraries such as React. I’m also
          skilled in backend development, enabling a full-stack approach to
          problem-solving.
        </Text>
        <Text element="p" size="lg">
          Most of my work experience is in the healthcare and finance
          industries.
        </Text>
      </FlexBox>
    </Section>
  );
};
