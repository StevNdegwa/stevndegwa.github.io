import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { AtomElementProps } from "../types";
import { Wrapper } from "./style";

export type TextProps = PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & AtomElementProps
> &
  Partial<{
    variant: "solid" | "outline";
    weight: "light" | "regular" | "medium" | "bold";
    textShadow: "xs" | "sm" | "md" | "lg" | "xl";
    size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
    heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }>;

export const Text: React.FC<TextProps> = ({
  color = "dark",
  children,
  className,
  element,
  size = "md",
  weight = "regular",
  heading,
  variant,
  ...props
}) => {
  const elementClasses = clsx(
    className,
    `${color}-color-text`,
    `${size}-text-size`,
    `${weight}-text-weight`,
    {
      [`${variant}-text-variant`]: !!variant,
    }
  );

  return (
    <Wrapper
      as={heading || element || "span"}
      {...props}
      className={elementClasses}
    >
      {children}
    </Wrapper>
  );
};
