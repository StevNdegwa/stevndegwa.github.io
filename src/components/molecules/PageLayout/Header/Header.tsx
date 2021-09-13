import React, { FC, useCallback, useState } from "react"
import { FaBars, FaGithub, FaHome } from "react-icons/fa"
import { IconButton, IconLink } from "../../../atoms"
import { HeaderWrapper } from "./styles"
import Menu from "../Menu"

const Header: FC = () => {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

  const openMenu = useCallback(() => {
    setMenuExpanded(true)
  }, [setMenuExpanded])

  const closeMenu = useCallback(() => {
    setMenuExpanded(false)
  }, [])

  return (
    <HeaderWrapper>
      <span>
        <IconLink href="/">
          <FaHome />
        </IconLink>
      </span>
      <span>
        <IconLink href="https://github.com/StevNdegwa" target="_blank">
          <FaGithub />
        </IconLink>
        <IconButton onClick={openMenu}>
          <FaBars />
        </IconButton>
      </span>
      <Menu expanded={menuExpanded} close={closeMenu} />
    </HeaderWrapper>
  )
}

export default Header
