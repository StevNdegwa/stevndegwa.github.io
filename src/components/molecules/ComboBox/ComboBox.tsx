import React, { FC, ReactNode, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { ComboBoxWrapper, ComboBoxControl, ComboBoxList } from "./styles"

export interface ComboBoxProps {
  items: Array<Record<string, unknown | ReactNode>>
}

export const ComboBox: FC<ComboBoxProps> = ({ items }) => {
  const [selected, setSelected] = useState(items[0])
  const [expanded, setExpanded] = useState(false)

  const selectItem = (item: any) => {
    setSelected(item)
  }

  return (
    <ComboBoxWrapper>
      <ComboBoxControl>
        {expanded ? <FaAngleUp /> : <FaAngleDown />}
      </ComboBoxControl>
      <ComboBoxList expanded={expanded}>
        {items.map((item: any, index: number) => (
          <li key={index} onClick={() => selectItem(item)}>
            {item["label"]}
          </li>
        ))}
      </ComboBoxList>
    </ComboBoxWrapper>
  )
}
