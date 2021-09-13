import React, { FC } from "react"
import { LinkWrapper } from "./styles"

export interface IconLinkProps {
  color?: "primary" | "secondary" | "tertiary"
  href: string
  [prop: string]: unknown
}

export const IconLink: FC<IconLinkProps> = ({
  children,
  color,
  href,
  ...props
}) => {
  return (
    <LinkWrapper to={href} {...props}>
      {children}
    </LinkWrapper>
  )
}
