import React, { FC, PropsWithChildren } from "react";
import { Box } from "@components/atoms";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};
