import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { AtomElementProps } from "../types";
import { Wrapper } from "./styles";

export type BoxProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & AtomElementProps
> &
  Partial<{
    shadow: "xs" | "sm" | "md" | "lg" | "xl";
    borderRadius: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    border: "xs" | "sm" | "md" | "lg" | "xl";
  }>;

export const Box: React.FC<BoxProps> = ({
  color = "dark",
  children,
  className,
  element,
  borderRadius,
  border,
  shadow,
  ...props
}) => {
  const elementClasses = clsx(className, `${color}-color-text`, {
    [`${borderRadius}-rounded`]: !!borderRadius,
    [`border-${border}`]: !!border,
    [`shadow-${shadow}`]: !!shadow,
  });

  return (
    <Wrapper as={element} {...props} className={elementClasses}>
      {children}
    </Wrapper>
  );
};
