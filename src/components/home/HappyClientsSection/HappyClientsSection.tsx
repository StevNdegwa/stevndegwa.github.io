import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Slider } from "../../molecules"
import {
  HappyClientsSectionWrapper,
  TiltedBg,
  HappyClientsTitle,
  HappyClients,
  HappyClientCard,
  HappyClientsScrollBack,
  HappyClientsScrollForward,
  HappyClientsCards,
} from "./styles"

export const HappyClientsSection = () => {
  let backwardAction: () => void | undefined,
    forwardAction: () => void | undefined

  const handlBackClick = () => {
    backwardAction?.()
  }

  const handleForwardClick = () => {
    forwardAction?.()
  }

  return (
    <HappyClientsSectionWrapper>
      <TiltedBg></TiltedBg>
      <HappyClientsTitle>
        <h3>My clients</h3>
      </HappyClientsTitle>
      <HappyClients>
        <HappyClientsScrollBack onClick={handlBackClick}>
          <FaArrowLeft />
        </HappyClientsScrollBack>
        <HappyClientsCards>
          <Slider
            backwardAction={action => {
              backwardAction = action
            }}
            forwardAction={action => {
              forwardAction = action
            }}
            slideWidth={400}
          >
            <HappyClientCard>Savannah</HappyClientCard>
            <HappyClientCard>Welite</HappyClientCard>
          </Slider>
        </HappyClientsCards>
        <HappyClientsScrollForward onClick={handleForwardClick}>
          <FaArrowRight />
        </HappyClientsScrollForward>
      </HappyClients>
    </HappyClientsSectionWrapper>
  )
}
