import React, { FC, PropsWithChildren, ReactNode, useMemo } from "react";
import clsx from "clsx";
import { Wrapper } from "./styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren<
    Partial<{
      color:
        | "primary"
        | "light-primary"
        | "secondary"
        | "light-secondary"
        | "grey"
        | "light-grey"
        | "dark"
        | "light-dark";
      href: string;
      size: "sm" | "md" | "lg";
      variant: "outline" | "fill" | "plain";
      type: string;
      leftIcon: ReactNode;
    }>
  >;

export const Button: FC<ButtonProps> = ({
  children,
  color,
  href,
  className,
  size,
  variant,
  type = "button",
  leftIcon,
  ...props
}) => {
  const element = useMemo(() => (href ? "a" : "button"), [href]);
  const elementClasses = clsx(className, {
    [`${color}-bg-color`]: !!color,
    [`${size}-size`]: !!size,
    [`${variant}-style`]: !!variant,
  });

  return (
    <Wrapper {...props} as={element} href={href} className={elementClasses}>
      {leftIcon}
      {children}
    </Wrapper>
  );
};
