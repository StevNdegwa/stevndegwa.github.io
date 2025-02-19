import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import icon from "@assets/images/codility.jpg";
import { Card, FlexBox } from "@components/molecules";
import { Text } from "@components/atoms";
import { Section } from "../Section";
import { BadgeIcon, BadgesCertificationsWrapper, BadgeTitle } from "./styles";

export type BadgeType = {
  title: string;
  by: string;
  iconId: string;
  from: string;
  link: string;
  homepage: string;
};

export const BadgesAndCertifications: FC<{ list: BadgeType[] }> = ({
  list,
}) => {
  return (
    <BadgesCertificationsWrapper>
      <Section>
        <FlexBox direction="column" gap="md">
          <Text heading="h2" size="xxl" weight="medium">
            Badges and Certifications 🥇
          </Text>
          <FlexBox gap="sm" justify="space-between" wrap>
            {list.map((badge: BadgeType, index: number) => (
              <Card key={index}>
                <Card.Title>
                  <FlexBox gap="sm" align="center">
                    <BadgeIcon borderRadius="sm">
                      <a href={badge.homepage} target="_blank">
                        <img
                          src={icon}
                          alt={`${badge.title} by ${badge.from}`}
                        />
                      </a>
                    </BadgeIcon>
                    <BadgeTitle size="lg">
                      {badge.title} by {badge.by}
                    </BadgeTitle>
                  </FlexBox>
                </Card.Title>
                <Card.Content>
                  <FlexBox gap="sm" align="center">
                    <FaCalendarAlt size={24} />
                    <Text>{badge.from} - ~</Text>
                  </FlexBox>
                </Card.Content>
                <Card.Action href={badge.link} target="_blank">
                  View credential
                </Card.Action>
              </Card>
            ))}
          </FlexBox>
        </FlexBox>
      </Section>
    </BadgesCertificationsWrapper>
  );
};
