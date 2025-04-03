/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import { FlexBox } from "@components/molecules";
import styled from "styled-components";

export const NavContainer = styled(FlexBox)`
  height: 80px;
  margin: 20px auto;
  width: fit-content;
  padding: 0 40px;

  @media only screen and (max-width: 400px) {
    padding: 0 20px;
  }
`;
