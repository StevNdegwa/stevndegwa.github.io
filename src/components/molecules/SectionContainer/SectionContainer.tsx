import React, { FC, useEffect, useRef } from "react"
import { styleElementInView } from "../../../hooks"
import { SectionContainerWrapper } from "./styles"

export const SectionContainer: FC = ({ children, ...props }) => {
  const section = useRef(null)
  useEffect(() => {
    if (section.current) {
      const observer = styleElementInView({ transform: "translate(0,0)" })
      observer?.observe(section.current)
    }
  }, [section])

  return (
    <SectionContainerWrapper ref={section} {...props}>
      {children}
    </SectionContainerWrapper>
  )
}
