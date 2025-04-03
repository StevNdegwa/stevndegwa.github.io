import React, { FC } from "react";
import { Wrapper, ActiveLinkIndicator } from "./styles";
import { Text } from "@components/atoms";

export const NavItem: FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  const isActiveLnk =
    typeof window !== "undefined" && window.location.pathname === href;

  return (
    <Wrapper to={href}>
      <Text size="xl" weight="medium" color="dark">
        {label}
      </Text>
      <ActiveLinkIndicator
        transition={{ type: "spring", duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActiveLnk ? 1 : 0,
        }}
        $isActiveLink={isActiveLnk}
      />
    </Wrapper>
  );
};
