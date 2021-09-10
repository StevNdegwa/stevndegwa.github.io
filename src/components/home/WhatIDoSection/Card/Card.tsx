import React, { FC, memo, useEffect, useRef } from "react"
import { styleElementInView } from "../../../../hooks"
import { CardWrapper, CardIcon, CardText } from "./styles"

export interface CardProps {
  imgSrc: string
  imgAlt: string
  text: string
  [props: string]: unknown
}

const Card: FC<CardProps> = memo(({ imgSrc, imgAlt, text, ...props }) => {
  const card = useRef(null)

  useEffect(() => {
    if (card.current) {
      const observer = styleElementInView({
        transform: "scale(1)",
      })
      observer?.observe(card.current)
    }
  }, [card])

  return (
    <CardWrapper {...props} ref={card}>
      <div>
        <CardIcon>
          <img src={imgSrc} alt={imgAlt} />
        </CardIcon>
        <CardText>{text}</CardText>
      </div>
    </CardWrapper>
  )
})

export default Card
