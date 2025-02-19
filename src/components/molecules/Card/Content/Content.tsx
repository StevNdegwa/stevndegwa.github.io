import React, { FC, PropsWithChildren } from "react";
import { Box } from "@components/atoms";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};
