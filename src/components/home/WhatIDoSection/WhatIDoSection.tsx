import React, { FC } from "react"
import web_design_development from "../../../images/web_design_web_ux.svg"
import web_development from "../../../images/web_development.svg"
import data_visualization from "../../../images/data_visualization.svg"
import { Button } from "../../atoms"
import Card from "./Card"

import { WhatIDoSectionWrapper, LeftSide, RightSide } from "./styles"

export interface WhatIDoSectionProps {
  moveToContactsSection: () => void
}

export const WhatIDoSection: FC<WhatIDoSectionProps> = ({
  moveToContactsSection,
}) => {
  return (
    <WhatIDoSectionWrapper>
      <LeftSide>
        <Card
          imgSrc={web_design_development}
          imgAlt="Web design"
          text="Web design"
          style={{
            gridArea: "web_design",
          }}
        />
        <Card
          imgSrc={web_development}
          imgAlt="Web development"
          text="Frontend web development"
          style={{
            gridArea: "web_development",
          }}
        />
        <Card
          imgSrc={data_visualization}
          imgAlt="Data Visualization"
          text="Data visualization"
          style={{
            gridArea: "data_visualization",
          }}
        />
      </LeftSide>
      <RightSide>
        <h1>What I offer</h1>
        <ul>
          <li>Usable web applications</li>
          <li>Insightful solutions</li>
          <li>Thoughtful design</li>
          <li>User accessibility</li>
          <li>Clear data presentation</li>
        </ul>
        <Button primary raised onClick={moveToContactsSection}>
          Let's Talk
        </Button>
      </RightSide>
    </WhatIDoSectionWrapper>
  )
}
