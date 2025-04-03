import React, { forwardRef } from "react";
import { Wrapper } from "./styles";
import { Loader } from "./Loader";
import { Item } from "./Item";

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  loading?: boolean;
};

const _List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, loading, ...props }) => {
    return (
      <>
        <Wrapper $show={!!loading} as={"div"}>
          <Loader />
        </Wrapper>
        <Wrapper $show={!loading} {...props}>
          {children}
        </Wrapper>
      </>
    );
  }
);

export const List = Object.assign(_List, {
  Item,
  Loader,
});
