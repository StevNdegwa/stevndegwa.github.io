import * as React from "react"
import icon from "../images/icon.png"
import type { HeadFC, PageProps } from "gatsby"
import { Header, PageLayout } from "../components"
import { GlobalStyle } from "../components/GlobalStyle"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      Homepage
    </PageLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Stephen Ng'ang'a</title>
  <link rel="icon" href={icon} />
</>
