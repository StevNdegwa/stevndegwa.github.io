import React, { FC, memo } from "react"
import { Link } from "gatsby"
import { LinkWrapper } from "./styles"

export interface IconLinkProps {
  color?: "primary" | "secondary" | "tertiary"
  href?: string
  to?: string
  [prop: string]: unknown
}

export const IconLink: FC<IconLinkProps> = memo(
  ({ children, color, href, to, ...props }) => (
    <LinkWrapper>
      {to ? (
        <Link to={to} {...props}>
          {children}
        </Link>
      ) : (
        <a href={href} {...props}>
          {children}
        </a>
      )}
    </LinkWrapper>
  )
)
