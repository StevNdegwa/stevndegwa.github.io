import React, { FC, useCallback, useEffect, useState } from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import { IconContext } from "react-icons"
import { IntlProvider } from "react-intl"
import { CloudinaryContext } from "cloudinary-react"
import { theme } from "../../../styles"
import "../../../styles/base.css"
import GlobalStyles from "../../../styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"
import { PageAlert } from "../PageAlert"
import { LocaleContext } from "../../../context"
import useGetTranslations from "./useGetTranslations"
import useThemeMode from "./useThemeMode"
import { PageLayoutWrapper, PageContent, SkipToContent } from "./styles"

export interface PageLayoutProps {
  skipToContent: () => void
  [prop: string]: unknown
}

export const PageLayout: FC<PageLayoutProps> = ({
  children,
  skipToContent,
  ...props
}) => {
  const { translations } = useGetTranslations()
  const [locale, setLocale] = useState("en-US")

  const { themeMode, toggleThemeMode } = useThemeMode()

  useEffect(() => {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(ar?: any, ar2?: any) {
      ;(window as any).dataLayer.push(arguments)
      console.log(ar, ar2)
    }
    gtag("js", new Date())

    gtag("config", "G-CWK3FTBE7K")
  }, [])

  const messages = useCallback(
    locale => {
      let translation = translations.find((t: any) => t.locale === locale)
      return translation ? translation.messages : {}
    },
    [translations]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <LocaleContext.Consumer>
        {({ locale }) => (
          <IntlProvider
            locale={locale}
            defaultLocale="en-US"
            messages={messages(locale)}
          >
            <ThemeProvider theme={theme}>
              <IconContext.Provider value={{ className: "icon" }}>
                <CloudinaryContext cloudName="dnixr3nel">
                  <PageAlert>Site still in development</PageAlert>
                  <PageLayoutWrapper {...props}>
                    <GlobalStyles mode={themeMode} />
                    <Helmet>
                      <title>Stephen Ng'ang'a | Software developer</title>
                      <link href="" rel="stylesheet" />
                      <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                      />
                      <meta name="theme-color" content="#2C3E50" />
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
                      {/* Global site tag (gtag.js) - Google Analytics */}
                      <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-CWK3FTBE7K"
                      ></script>
                    </Helmet>
                    <PageContent>
                      <SkipToContent tabIndex={1} onClick={skipToContent}>
                        Skip to content
                      </SkipToContent>
                      <Header toggleThemeMode={toggleThemeMode} />
                      {children}
                    </PageContent>
                    <Footer />
                  </PageLayoutWrapper>
                </CloudinaryContext>
              </IconContext.Provider>
            </ThemeProvider>
          </IntlProvider>
        )}
      </LocaleContext.Consumer>
    </LocaleContext.Provider>
  )
}
