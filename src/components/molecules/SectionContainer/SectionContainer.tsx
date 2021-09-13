import React, { CSSProperties, FC, useEffect, useRef } from "react"
import { styleElementInView } from "../../../hooks"
import { SectionContainerWrapper } from "./styles"

export interface SectionContainerProps {
  style?: CSSProperties
  [prop: string]: unknown
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  style,
  ...props
}) => {
  const section = useRef(null)
  useEffect(() => {
    if (section.current) {
      const observer = styleElementInView({ transform: "translate(0,0)" })
      observer?.observe(section.current)
    }
  }, [section])

  return (
    <SectionContainerWrapper ref={section} style={style} {...props}>
      {children}
    </SectionContainerWrapper>
  )
}
