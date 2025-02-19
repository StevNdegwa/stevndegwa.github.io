import React, { FC } from "react";
import { DataTag } from "../DataTag";
import { FlexBox } from "../FlexBox";

export const DataTagsList: FC<{ list: string[] }> = ({ list }) => {
  return (
    <FlexBox wrap gap="xs">
      {list.map((item: string, index: number) => (
        <DataTag key={index} label={item} />
      ))}
    </FlexBox>
  );
};
