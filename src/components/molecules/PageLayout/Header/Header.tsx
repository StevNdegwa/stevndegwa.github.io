import React, { FC, useCallback, useMemo, useState } from "react"
import { FaBars, FaGithub, FaHome, FaMoon } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { useLocaleContext } from "../../../../context"
import { IconButton, IconLink } from "../../../atoms"
import { DropDown } from "../../DropDown"
import { HeaderWrapper } from "./styles"
import Menu from "../Menu"

export interface IHeaderProps {
  toggleThemeMode: () => void
}

const Header: FC<IHeaderProps> = ({ toggleThemeMode }) => {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)
  const { setLocale } = useLocaleContext()

  const {
    allJson: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allJson {
          edges {
            node {
              languages {
                name
                key
              }
            }
          }
        }
      }
    `
  )

  const {
    node: { languages },
  } = edges.find((edge: any) => Boolean(edge.node.languages))

  const languageItems = useMemo(
    () =>
      languages.map((language: { name: string; key: string }) => ({
        label: language.name,
        value: language.key,
      })),
    [languages]
  )

  const selectLanguage = useCallback((language: any) => {
    if (language) {
      setLocale?.(language.value)
    }
  }, [])

  const openMenu = useCallback(() => {
    setMenuExpanded(true)
  }, [setMenuExpanded])

  const closeMenu = useCallback(() => {
    setMenuExpanded(false)
  }, [])

  return (
    <HeaderWrapper>
      <span>
        <IconLink to="/" label="Home page" color="secondary">
          <FaHome aria-hidden="true" />
        </IconLink>
      </span>
      <span>
        <IconLink
          href="https://github.com/StevNdegwa"
          target="_blank"
          label="Github"
        >
          <FaGithub aria-hidden="true" />
        </IconLink>
        <DropDown items={languageItems} handleSelectedItem={selectLanguage} />
        {/* <IconButton onClick={toggleThemeMode}>
          <FaMoon />
        </IconButton> */}
        <IconButton color="secondary" onClick={openMenu}>
          <FaBars />
        </IconButton>
      </span>
      <Menu expanded={menuExpanded} close={closeMenu} />
    </HeaderWrapper>
  )
}

export default Header
