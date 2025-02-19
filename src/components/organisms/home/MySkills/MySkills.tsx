import React, { FC } from "react";
import { ContentWrapper, DataTagsList, FlexBox } from "@components/molecules";
import { Section } from "../Section";
import { TitleSection } from "./styles";
import { Text } from "@components/atoms";

export const MySkills: FC<{
  whatIDo: string[];
  whatIWorkedWith: string[];
}> = ({ whatIDo, whatIWorkedWith }) => {
  return (
    <Section title="My Skills">
      <FlexBox direction="column" gap="md">
        <FlexBox>
          <TitleSection>
            <Text size="xxxl" weight="bold" variant="outline">
              What I Do
            </Text>
          </TitleSection>
          <DataTagsList list={whatIDo}></DataTagsList>
        </FlexBox>
        <FlexBox>
          <TitleSection>
            <Text size="xxxl" weight="bold" variant="outline">
              What I've Worked With
            </Text>
          </TitleSection>
          <DataTagsList list={whatIWorkedWith}></DataTagsList>
        </FlexBox>
      </FlexBox>
    </Section>
  );
};
