import React, { FC } from "react";
import { MdAccessTime } from "react-icons/md";
import {
  Border,
  JobBadge,
  JobDescription,
  JobsContainer,
  JobTimeline,
  JobTitle,
  JobTitleWrapper,
  JobWrapper,
  Wrapper,
} from "./styles";

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
    <Wrapper>
      <h1>Work Experience</h1>
      <JobsContainer>
        {list.map((job, index) => (
          <JobWrapper key={index}>
            <Border
              initial={{ height: "0px" }}
              whileInView={{ height: "100%" }}
              transition={{ delay: index * 0.3, duration: 0.3 }}
            />
            <JobTitleWrapper>
              <JobBadge />
              <div>
                <JobTimeline>
                  <MdAccessTime size={14} />
                  <span>
                    {job.start} - {job.end}
                  </span>
                </JobTimeline>
                <JobTitle>
                  {job.position} at {job.company}
                </JobTitle>
              </div>
            </JobTitleWrapper>

            <JobDescription>{job.description}</JobDescription>
          </JobWrapper>
        ))}
      </JobsContainer>
    </Wrapper>
  );
};
