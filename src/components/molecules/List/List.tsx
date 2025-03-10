import React, { forwardRef } from "react";
import { Wrapper } from "./styles";
import { Loader } from "./Loader";
import { Item } from "./Item";

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  loading?: boolean;
};

const _List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, loading, ...props }) => {
    if (loading) {
      return (
        <Wrapper as={"div"}>
          <Loader />
        </Wrapper>
      );
    }

    return <Wrapper {...props}>{children}</Wrapper>;
  }
);

export const List = Object.assign(_List, {
  Item,
  Loader,
});
