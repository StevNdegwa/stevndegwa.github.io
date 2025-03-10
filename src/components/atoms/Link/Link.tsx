import React, { FC, forwardRef } from "react";
import { Wrapper } from "./styles";

export type LinksProps = React.HTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinksProps>(
  ({ children, ...props }, ref) => {
    return (
      <Wrapper {...props} ref={ref}>
        {children}
      </Wrapper>
    );
  }
);
