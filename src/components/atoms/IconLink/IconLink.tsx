import React, { FC, memo } from "react"
import { Link } from "gatsby"
import { LinkWrapper } from "./styles"

export interface IconLinkProps {
  label: string
  color?: "primary" | "secondary" | "tertiary"
  href?: string
  to?: string
  [prop: string]: unknown
}

export const IconLink: FC<IconLinkProps> = memo(
  ({ children, color, href, to, label, ...props }) => {
    const id = label.replace(" ", "_");
    
    return (
      <LinkWrapper color={color}>
        {to ? (
          <Link to={to} {...props}>
            {children}
          </Link>
        ) : (
          <a href={href} {...props} aria-labelledby={id}>
            {children}
          </a>
        )}
        <div
          style={{ visibility: "hidden", width: "0px" }}
          id={id}
        >
          {label}
        </div>
      </LinkWrapper>
    )
  }
)
