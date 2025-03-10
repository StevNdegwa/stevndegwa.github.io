import React, { FC } from "react";
import { Wrapper } from "./style";
import { FlexBox } from "@components/molecules";
import { Text } from "@components/atoms";

export type ListItemProps = React.HTMLAttributes<HTMLLIElement> & {
  header?: React.ReactNode;
};

export const Item: FC<ListItemProps> = ({ header, children }) => {
  return (
    <Wrapper>
      <FlexBox direction="column" gap="sm">
        {header && (
          <Text heading="h5" size="lg" weight="bold">
            {header}
          </Text>
        )}
        <Text>{children}</Text>
      </FlexBox>
    </Wrapper>
  );
};
