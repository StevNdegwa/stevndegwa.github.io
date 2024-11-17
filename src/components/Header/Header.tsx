/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import React from "react";
import { NavContainer, Wrapper } from "./styles";
import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavItem href="/">About</NavItem>
        <NavItem href="/projects/">Projects</NavItem>
        <NavItem href="/contacts/">Contacts</NavItem>
      </NavContainer>
    </Wrapper>
  );
};
