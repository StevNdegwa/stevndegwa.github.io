import React, { FC, memo } from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { IconButton } from "../../../atoms"
import variants from "./framer"
import { MenuWrapper, MenuLinks, MenuHeader, MenuFooter } from "./styles"

export interface MenuProps {
  expanded: boolean
  close: () => void
}

const Menu: FC<MenuProps> = memo(({ expanded, close }) => {
  return (
    <MenuWrapper
      variants={variants}
      animate={expanded ? "slideOpen" : "slideClose"}
      transition={{ duration: 0.3 }}
    >
      <MenuHeader>
        <IconButton onClick={close}>
          <FaTimes />
        </IconButton>
      </MenuHeader>
      <MenuLinks>
        <ul>
          <li>
            <span>⇠</span> &nbsp;
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <span>⇠</span> &nbsp;
            <Link to="/about">About me</Link>
          </li> */}
          <li>
            <span>⇠</span> &nbsp;
            <Link to="/projects">My Projects</Link>
          </li>
          {/* <li>
            <span>⇠</span> &nbsp;
            <Link to="/contacts">My Contacts</Link>
          </li> */}
        </ul>
      </MenuLinks>
      <MenuFooter>Copyright @ {new Date().getFullYear()}</MenuFooter>
    </MenuWrapper>
  )
})

export default Menu
