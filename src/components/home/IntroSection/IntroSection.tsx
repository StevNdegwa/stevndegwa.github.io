import React, { FC } from "react"
import { FaRegCommentAlt } from "react-icons/fa"
import {
  IntroSectionWrapper,
  IntroSectionName,
  IntroSectionThingsIDo,
  LetsTalkBtn,
} from "./styles"

export interface IntroSectionProps {
  moveToContactsSection: () => void;
}

export const IntroSection: FC<IntroSectionProps> = ({ moveToContactsSection }) => {
  return (
    <IntroSectionWrapper>
      <IntroSectionName>
        <div>
          <div>👋 My name is</div>
          <div>Stephen Ng’ang’a</div>
        </div>
        <div>
          I’m an <span>Engineer</span>. I build things that solve problems.
        </div>
      </IntroSectionName>
      {/**<IntroSectionThingsIDo>
        <div>I live in Nairobi, Kenya</div>
        <div>I am a programmer</div>
      </IntroSectionThingsIDo>**/}
      <LetsTalkBtn onClick={moveToContactsSection}>
        Lets talk{" "}
        <figure>
          <FaRegCommentAlt />
        </figure>{" "}
      </LetsTalkBtn>
    </IntroSectionWrapper>
  )
}
