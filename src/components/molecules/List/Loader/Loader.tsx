import React from "react";
import { Item } from "./styles";
import { Shimmer } from "@components/atoms";
import { FlexBox } from "@components/molecules/FlexBox";

export const Loader = () => (
  <FlexBox direction="column" gap="md">
    <Item>
      <Shimmer />
    </Item>
    <Item>
      <Shimmer />
    </Item>
    <Item>
      <Shimmer />
    </Item>
  </FlexBox>
);
