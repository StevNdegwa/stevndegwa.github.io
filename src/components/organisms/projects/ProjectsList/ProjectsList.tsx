import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects_creative from "@assets/images/projects_creative.png";
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
          data
            .filter((project: ProjectType) =>
              project.topics.includes("portfolio")
            )
            .sort((projectA: any, projectB: any) => projectB.id - projectA.id)
        )
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <Section>
        <FlexBox direction="column">
          <Text textAlign="center">
            An error occurred, and couldn't load list
          </Text>
        </FlexBox>
      </Section>
    );
  }

  return (
    <Section>
      <FlexBox
        direction="column"
        gap="sm"
        style={{
          backgroundImage: `url(${projects_creative})`,
          backgroundSize: "auto 100px",
          backgroundPosition: "right center",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundRepeat: "no-repeat",
          height: "150px",
          width: "100%",
        }}
      />
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
                  <Text
                    weight="bold"
                    transform="uppercase"
                    style={{ maxWidth: "90%", overflowWrap: "break-word" }}
                  >
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
