import React, { FC, ReactNode } from "react"
import {
  WhatIDoSectionWrapper,
  WhatIDoTitle,
  WhatIDoCards,
  WhatIDoCard,
} from "./styles"

export const WhatIDoSection = () => {
  return (
    <WhatIDoSectionWrapper>
      <WhatIDoTitle>
        <h2>My Services</h2>
        <h4>My work will help you achieve all your goals</h4>
      </WhatIDoTitle>
      <WhatIDoCards>
        <Card content="I design and build user interfaces" />
        <Card content="I make data visualizations" />
        <Card content="I build web applications" />
      </WhatIDoCards>
    </WhatIDoSectionWrapper>
  )
}

const Card: FC<{ content: ReactNode }> = ({ content }) => (
  <WhatIDoCard>
    <figure></figure>
    <div>{content}</div>
  </WhatIDoCard>
)
