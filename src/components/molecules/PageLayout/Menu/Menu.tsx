import React, { FC } from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { IconButton } from "../../../atoms"
import variants from "./framer"
import { MenuWrapper, MenuLinks, MenuHeader, MenuFooter } from "./styles"

export interface MenuProps {
  expanded: boolean
  close: () => void
}

const Menu: FC<MenuProps> = ({ expanded, close }) => {
  return (
    <MenuWrapper
      variants={variants}
      animate={expanded ? "slideOpen" : "slideClose"}
      initial={false}
    >
      <MenuHeader>
        <IconButton onClick={close}>
          <FaTimes />
        </IconButton>
      </MenuHeader>
      <MenuLinks>
        <ul>
          <li>
            <Arrow />
            <Link to="/">Home</Link>
          </li>
          <li>
            <Arrow />
            <Link to="/about">About</Link>
          </li>
          <li>
            <Arrow />
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Arrow />
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </MenuLinks>
      <MenuFooter>Copyright @ {new Date().getFullYear()}</MenuFooter>
    </MenuWrapper>
  )
}

const Arrow = () => (
  <div>
    <div>
      <div />
      <div />
    </div>
  </div>
)

export default Menu
