import React, { FC, useCallback, useState } from "react"
import { FaBars, FaGithub } from "react-icons/fa"
import { IconButton, IconLink } from "../../atoms";
import { HeaderWrapper } from "./styles"
import Menu from "../Menu"

const Header: FC = () => {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

  const openMenu = useCallback(() => {
    console.log("Menu open")
    setMenuExpanded(true)
  }, [setMenuExpanded])

  const closeMenu = useCallback(() => {
    setMenuExpanded(false)
  }, [])

  return (
    <HeaderWrapper>
      <IconLink href="https://github.com/StevNdegwa" target="_blank">
        <FaGithub color="#2C3E50" />
      </IconLink>
      <IconButton onClick={openMenu}>
        <FaBars />
      </IconButton>
      <Menu expanded={menuExpanded} close={closeMenu} />
    </HeaderWrapper>
  )
}

export default Header
