import React, { FC } from "react";
import { BoxProps } from "@components/atoms";
import { Wrapper } from "./styles";
import clsx from "clsx";

export type FlexBoxProps = BoxProps &
  Partial<{
    direction: "row" | "column";
    wrap: boolean;
    justify: "center" | "space-between" | "space-around" | "start" | "end";
    align: "center" | "flex-start" | "flex-end";
    gap: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  }>;

export const FlexBox: FC<FlexBoxProps> = ({
  direction,
  justify,
  className,
  wrap,
  align,
  gap,
  ...props
}) => {
  const elementClasses = clsx(className, {
    "flex-wrap": wrap,
    [`align-${align}`]: !!align,
    [`justify-${justify}`]: !!justify,
    [`flex-${direction}`]: !!direction,
    [`gap-${gap}`]: !!gap,
  });

  return <Wrapper {...props} className={elementClasses} />;
};
