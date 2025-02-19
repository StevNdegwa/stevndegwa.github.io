import { Button, ButtonProps } from "@components/atoms";
import React, { FC } from "react";

export const Action: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} color="light-grey">
      {children}
    </Button>
  );
};
