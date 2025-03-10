import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "../Section";
import { FlexBox, List } from "@components/molecules";
import { Link } from "@components/atoms";

export type ProjectType = {
  id: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
};

export const ProjectsList = () => {
  const [projectsList, setProjectsList] = React.useState<ProjectType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/StevNdegwa/repos")
      .then((response) => response.json())
      .then((data) =>
        setProjectsList(
          data.filter((project: ProjectType) =>
            project.topics.includes("portfolio")
          )
        )
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section>
      <List loading={loading}>
        {projectsList.map((project) => (
          <List.Item
            key={project.id}
            header={
              <Link href={project.html_url} target="_blank">
                <FlexBox direction="row" gap="sm">
                  <span>GitHub/{project.full_name}</span>
                  <FaExternalLinkAlt />
                </FlexBox>
              </Link>
            }
          >
            {project.description}
          </List.Item>
        ))}
      </List>
    </Section>
  );
};
