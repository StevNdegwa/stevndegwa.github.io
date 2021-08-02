import React, { FC } from "react"
import Helmet from "react-helmet"
import GlobalStyles from "../../styles/GlobalStyles"
import Header from "./Header"
import { PageLayoutWrapper } from "./styles"

export const PageLayout: FC<Record<string, unknown>> = ({ children }) => {
  return (
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      {children}
    </PageLayoutWrapper>
  )
}
