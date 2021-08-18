import React, { FC, ReactNode } from "react"
import web_design_development from "../../../images/web_design_web_ux.svg"
import web_development from "../../../images/web_development.svg"
import data_visualization from "../../../images/data_visualization.svg"
import { SectionContainer } from "../../molecules";

import {
  WhatIDoSectionWrapper,
  WhatIDoTitle,
  WhatIDoCards,
  WhatIDoCard,
} from "./styles"

export const WhatIDoSection = () => {
  return (
    <WhatIDoSectionWrapper>
      <SectionContainer>
        <WhatIDoTitle>
          <h3>MY SERVICES</h3>
          <h4>My work will help you achieve all your goals</h4>
        </WhatIDoTitle>
        <WhatIDoCards>
          <Card
            content="I design and build user interfaces"
            iconSrc={web_design_development}
          />
          <Card
            content="I make data visualizations"
            iconSrc={data_visualization}
          />
          <Card content="I build web applications" iconSrc={web_development} />
        </WhatIDoCards>
      </SectionContainer>
    </WhatIDoSectionWrapper>
  )
}

const Card: FC<{ content: ReactNode; iconSrc: string }> = ({
  content,
  iconSrc,
}) => (
  <WhatIDoCard>
    <figure>
      <img src={iconSrc} />
    </figure>
    <div>{content}</div>
  </WhatIDoCard>
)
