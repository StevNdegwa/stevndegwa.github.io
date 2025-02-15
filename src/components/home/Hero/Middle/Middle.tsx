import React from "react";
import { GrGithub } from "react-icons/gr";
import stephen from "../../../../images/stephen.svg";
import {
  Intro,
  Wrapper,
  Stephen,
  AboutCard,
  AboutCardShadow,
  AboutCardBg,
  AboutCardLink,
} from "./styles";

export const Middle = () => {
  return (
    <Wrapper>
      <Stephen src={stephen} alt="hero-middle" />
      <Intro>
        <AboutCard>
          <AboutCardShadow />
          <AboutCardBg>
            <p>
              <h4 style={{ marginBottom: "10px" }}>Hello 👋,</h4>
              <span style={{ fontSize: "1.5rem" }}>
                I’m a software engineer. <br />I specialize in UI development
              </span>
            </p>
          </AboutCardBg>
          <AboutCardLink href="https://github.com/StevNdegwa" target="_blank">
            <GrGithub size={50} />
          </AboutCardLink>
        </AboutCard>
      </Intro>
    </Wrapper>
  );
};
