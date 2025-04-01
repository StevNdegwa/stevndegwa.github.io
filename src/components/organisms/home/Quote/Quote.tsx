import React, { FC, PropsWithChildren } from "react";
import { ImQuotesLeft } from "react-icons/im";

import { Section } from "../Section";
import { Box, Text } from "@components/atoms";

export const Quote: FC<PropsWithChildren> = () => {
  return (
    <Section>
      <Box>
        <Text element="span" size="xxxl" weight="bold" color="primary">
          <ImQuotesLeft />
        </Text>
        <br />
        <Text size="xxl" weight="medium" color="grey" textAlign="center">
          It is through practice in the small that professionals gain
          proficiency and trust for practice in the large
        </Text>
      </Box>
    </Section>
  );
};
