import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { AtomElementProps } from "../types";
import { Wrapper } from "./style";

export type TextProps = PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & AtomElementProps
> & {
  variant: "solid" | "outline";
  weight: "light" | "regular" | "medium" | "bold";
};

export const Text: React.FC<TextProps> = ({
  color,
  children,
  className,
  ...props
}) => {
  const elementClasses = clsx(className, {
    "dark-color-text": color === "dark",
    "primary-color-text": color === "primary",
    "secondary-color-text": color === "secondary",
    "grey-color-text": color === "grey",
  });

  return (
    <Wrapper {...props} className={elementClasses}>
      {children}
    </Wrapper>
  );
};
