import React, { PropsWithChildren } from "react";
import { Box, Text } from "@components/atoms";
import { Wrapper } from "./styles";

export const Section: React.FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => (
  <Wrapper gap="md">
    <Text heading="h2" size="xxxl" weight="light" textAlign="right">
      {title}
    </Text>
    <Box>{children}</Box>
  </Wrapper>
);
