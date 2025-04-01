import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "../Section";
import { DataTagsList, FlexBox, List } from "@components/molecules";
import { Box, Button, Link, Text } from "@components/atoms";

export type ProjectType = {
  id: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
  homepage: string;
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
              <Link
                href={project.html_url}
                target="_blank"
                title="View on GitHub"
              >
                <FlexBox direction="row" gap="sm">
                  <Text weight="bold" transform="uppercase">
                    GitHub/{project.full_name}
                  </Text>
                  <FaExternalLinkAlt />
                </FlexBox>
              </Link>
            }
          >
            <FlexBox direction="column" gap="sm">
              <Text element="p">{project.description}</Text>
              <DataTagsList list={project.topics} />
              <FlexBox>
                <Box>
                  {project.homepage && (
                    <Button
                      href={project.homepage}
                      size="sm"
                      color="dark"
                      variant="outline"
                      target="_blank"
                    >
                      View Live Application
                    </Button>
                  )}
                </Box>
              </FlexBox>
            </FlexBox>
          </List.Item>
        ))}
      </List>
    </Section>
  );
};
