import React, { FC } from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import { IconContext } from "react-icons"
import { theme, ThemeType } from "../../../styles"
import GlobalStyles from "../../../styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"
import { PageLayoutWrapper, PageContent } from "./styles"

export const PageLayout: FC<Record<string, unknown>> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{ color: (theme as ThemeType).colors.dark, className: "icon" }}
      >
        <PageLayoutWrapper>
          <GlobalStyles />
          <Helmet>
            <title>Stephen Ng'ang'a | Software developer</title>
            <link href="" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@200;400;500;600;700&display=swap"
              rel="stylesheet"
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap"
              rel="stylesheet"
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <PageContent>
            <Header />
            {children}
          </PageContent>
          <Footer/>
        </PageLayoutWrapper>
      </IconContext.Provider>
    </ThemeProvider>
  )
}
