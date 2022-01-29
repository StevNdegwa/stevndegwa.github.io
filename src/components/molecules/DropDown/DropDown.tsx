import React, { FC, ReactNode } from "react"
import { useSelect } from "downshift"
import { IconButton } from "../../atoms"
import { ItemType, Side } from "../types";
import { menuVariants } from "./variants"
import { DropDownWrapper, DropDownItems } from "./styles"

export interface DropDownProps {
  items: Array<ItemType>
  handleSelectedItem?: (item?: ItemType | null) => void
  icon: ReactNode
  side?: Side
}

export const DropDown: FC<DropDownProps> = ({ items, handleSelectedItem, icon, side = Side.RIGHT }) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: selectedItem =>
      handleSelectedItem?.(selectedItem.selectedItem),
  })

  return (
    <DropDownWrapper>
      <IconButton {...getToggleButtonProps()}>
        {icon}
      </IconButton>
      <DropDownItems
        {...getMenuProps()}
        variants={menuVariants}
        animate={isOpen ? "open" : "close"}
        highlighted={highlightedIndex + 1}
        side={side}
      >
        {items.map((item, index: number) => (
          <li {...getItemProps({ item, index })} key={index}>
            {item.label}
          </li>
        ))}
      </DropDownItems>
    </DropDownWrapper>
  )
}
