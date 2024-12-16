import React, { FC, PropsWithChildren, useMemo } from "react";
import { Wrapper, ActiveLinkIndicator } from "./styles";

export const NavItem: FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const isActiveLnk =
    typeof window !== "undefined" && window.location.pathname === href;

  return (
    <Wrapper to={href}>
      {children}
      <ActiveLinkIndicator
        transition={{ type: "spring", duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActiveLnk ? 1 : 0,
        }}
        isActiveLink={isActiveLnk}
      />
    </Wrapper>
  );
};
