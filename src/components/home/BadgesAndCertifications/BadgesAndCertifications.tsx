import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import {
  BadgesCertificationsWrapper,
  BadgesCertificationsItems,
  Item,
  StyledContent,
} from "./styles";

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
      <StyledContent>
        <h1>Badges and Certifications</h1>
        <BadgesCertificationsItems>
          {list.map((badge: BadgeType, index: number) => (
            <Item key={index}>
              <section>
                <div>
                  <a href={badge.homepage} target="_blank">
                    {/* <img
                      src={badge.iconLink}
                      alt={`${badge.title} by ${badge.from}`}
                    /> */}
                    <img />
                  </a>
                </div>
                <div>
                  <span>
                    {badge.title} <br />
                    <span>by</span> {badge.by}
                  </span>
                </div>
              </section>
              <section>
                <div>
                  <FaCalendarAlt />
                </div>
                <div>{badge.from} - ~</div>
              </section>
              <section>
                <a href={badge.link} target="_blank">
                  View credential
                </a>
              </section>
            </Item>
          ))}
        </BadgesCertificationsItems>
      </StyledContent>
    </BadgesCertificationsWrapper>
  );
};
