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
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="24"
                fill="white"
                stroke="#012444"
                strokeWidth="2"
              />
              <rect
                x="23.3359"
                y="6.67188"
                width="4.16667"
                height="37.5"
                rx="2"
                fill="#012444"
              />
              <rect
                x="10.6875"
                y="13.6406"
                width="4.16667"
                height="37.5"
                rx="2"
                transform="rotate(-45 10.6875 13.6406)"
                fill="#012444"
              />
              <rect
                x="6.67188"
                y="27.5078"
                width="4.16667"
                height="37.5"
                rx="2"
                transform="rotate(-90 6.67188 27.5078)"
                fill="#012444"
              />
              <rect
                x="13.6406"
                y="40.1562"
                width="4.16667"
                height="37.5"
                rx="2"
                transform="rotate(-135 13.6406 40.1562)"
                fill="#012444"
              />
            </svg>

            <p>I’m a software engineer. I specialize in UI development</p>
          </AboutCardBg>
          <AboutCardLink href="https://github.com/StevNdegwa" target="_blank">
            <GrGithub size={50} />
          </AboutCardLink>
        </AboutCard>
      </Intro>
    </Wrapper>
  );
};
