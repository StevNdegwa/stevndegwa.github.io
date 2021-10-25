import React, { CSSProperties, FC } from "react"
import { useInView } from "react-intersection-observer"
import { variants } from "./framer"
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
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <SectionContainerWrapper
      variants={variants}
      animate={inView ? "inView" : "outView"}
      transition={{ duration: 0.5 }}
      ref={ref}
      style={style}
      {...props}
    >
      {children}
    </SectionContainerWrapper>
  )
}
