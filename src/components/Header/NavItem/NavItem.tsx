import React, { FC, HTMLProps, PropsWithChildren, useMemo } from "react";
import { Wrapper, ActiveLinkIndicator } from "./styles";

export const NavItem: FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const isActiveLnk = useMemo(
    () => typeof window !== "undefined" && window.location.pathname === href,
    [href]
  );

  return (
    <Wrapper to={href}>
      {children}
      <ActiveLinkIndicator isActiveLink={isActiveLnk} />
    </Wrapper>
  );
};
