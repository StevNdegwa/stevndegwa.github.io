import React, { FC } from "react";
import { MdAccessTime } from "react-icons/md";
import { FlexBox } from "@components/molecules";
import {
  Border,
  JobBadge,
  JobDescription,
  JobsContainer,
  JobTitleWrapper,
  JobWrapper,
} from "./styles";
import { Section } from "../Section";
import { Text } from "@components/atoms";

export type JobDataType = {
  start: string;
  end: string;
  company: string;
  position: string;
  description: string;
};

export const WorkExperience: FC<{
  list: JobDataType[];
}> = ({ list }) => {
  return (
    <Section title="Work Experience">
      <JobsContainer>
        <Border
          initial={{ height: "0px" }}
          whileInView={{ height: "100%" }}
          transition={{ delay: 0.5, duration: list.length * 0.5 }}
        />
        {list.map((job, index) => (
          <JobWrapper key={index}>
            <JobTitleWrapper>
              <JobBadge
                initial={{ backgroundColor: "var(--grey-color-transparent-3)" }}
                whileInView={{ backgroundColor: "var(--secondary-color)" }}
                transition={{
                  delay: 0.5 + index * 0.5,
                  duration: 0.2,
                }}
              />
              <FlexBox direction="column">
                <FlexBox gap="xs">
                  <MdAccessTime size={12} />
                  <Text size="xs">
                    {job.start} - {job.end}
                  </Text>
                </FlexBox>
                <Text size="lg" heading="h3" weight="bold" color="dark">
                  {job.position} at {job.company}
                </Text>
              </FlexBox>
            </JobTitleWrapper>
            <JobDescription element="p">{job.description}</JobDescription>
          </JobWrapper>
        ))}
      </JobsContainer>
    </Section>
  );
};
