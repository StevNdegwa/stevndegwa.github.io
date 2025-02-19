import React, { FC } from "react";
import { MdAccessTime } from "react-icons/md";
import { ContentWrapper, FlexBox } from "@components/molecules";
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
        {list.map((job, index) => (
          <JobWrapper key={index}>
            <Border
              initial={{ height: "0px" }}
              animate={{ height: "100%" }}
              transition={{ delay: index * 0.3, duration: 0.3, repeat: 0 }}
            />
            <JobTitleWrapper>
              <JobBadge
                initial={{ backgroundColor: "rgba(0, 51, 99, 10%)" }}
                animate={{ backgroundColor: "var(--primary-color)" }}
                transition={{ delay: index * 0.3, duration: 0.3, repeat: 0 }}
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
