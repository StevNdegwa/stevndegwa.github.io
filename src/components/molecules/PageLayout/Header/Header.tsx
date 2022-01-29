import React, { FC, useCallback, useMemo } from "react"
import { FaBars, FaGithub, FaHome, FaGlobe } from "react-icons/fa"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { IconLink } from "../../../atoms"
import { useLocaleContext } from "../../../../context"
import { DropDown } from "../../DropDown"
import { HeaderWrapper } from "./styles"

export interface IHeaderProps {
  toggleThemeMode: () => void
}

const Header: FC<IHeaderProps> = ({ toggleThemeMode }) => {
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
              },
              routes {
                name
                path
              }
            }
          }
        }
      }
    `
  )

  const {
    node: { languages, routes },
  } = edges.find((edge: any) => Boolean(edge.node.languages && edge.node.routes))

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
  }, []);


  const moveToPage = useCallback((page: any) => navigate(page.value), [])

  const routItems = useMemo(() => routes.map(
    (route:any) => ({ value: route.path, label: route.name })
  ), []);

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
        <DropDown
          items={languageItems}
          handleSelectedItem={selectLanguage}
          icon={<FaGlobe />}
        />
        <DropDown
          items={routItems}
          handleSelectedItem={moveToPage}
          icon={<FaBars color="#2db868" />}
        />
        {/* <IconButton onClick={toggleThemeMode}>
          <FaMoon />
        </IconButton> */}
      </span>
    </HeaderWrapper>
  )
}

export default Header
