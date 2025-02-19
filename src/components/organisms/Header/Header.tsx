/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import React from "react";
import { NavItem } from "@components/molecules";
import { NavContainer } from "./styles";

export const Header = () => {
  return (
    <NavContainer
      align="center"
      border="xs"
      justify="space-around"
      borderRadius="xl"
      gap="md"
    >
      <NavItem href="/" label="About" />
      <NavItem href="/projects/" label="Projects" />
      <NavItem href="/contacts/" label="Contacts" />
    </NavContainer>
  );
};
