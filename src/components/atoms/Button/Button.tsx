import React, { FC, PropsWithChildren, useMemo } from "react";
import clsx from "clsx";
import { Wrapper } from "./styles";

export type ButtonProps = React.HTMLAttributes<
  HTMLAnchorElement | HTMLButtonElement
> &
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
    }>
  >;

export const Button: FC<ButtonProps> = ({
  children,
  color,
  href,
  className,
  size,
  variant,
  ...props
}) => {
  const element = useMemo(() => (href ? "a" : "button"), [href]);
  const elementClasses = clsx(className, {
    [`${color}-bg-color`]: !!color,
    [`${size}-size`]: !!size,
    [`${variant}-style`]: !!variant,
  });

  return (
    <Wrapper
      {...props}
      type="button"
      as={element}
      href={href}
      className={elementClasses}
    >
      {children}
    </Wrapper>
  );
};
