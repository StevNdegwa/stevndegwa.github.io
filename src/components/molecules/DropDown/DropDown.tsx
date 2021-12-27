import React, { FC } from "react"
import { useSelect } from "downshift"
import { FaGlobe } from "react-icons/fa"
import { IconButton } from "../../atoms"
import { menuVariants } from "./variants"
import { DropDownWrapper, DropDownItems } from "./styles"

export type ItemType = {
  label: string
  value: unknown
}

export interface DropDownProps {
  items: Array<ItemType>
  handleSelectedItem?: (item?: ItemType | null) => void
}

export const DropDown: FC<DropDownProps> = ({ items, handleSelectedItem }) => {
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
        <FaGlobe />
      </IconButton>
      <DropDownItems
        {...getMenuProps()}
        variants={menuVariants}
        animate={isOpen ? "open" : "close"}
        highlighted={highlightedIndex + 1}
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
