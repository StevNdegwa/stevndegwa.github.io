/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import * as React from "react"
import icon from "../../images/icon.png"
import type { HeadFC, PageProps } from "gatsby"
import { PageLayout } from "../../components"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      Projects
    </PageLayout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Projects</title>
  <link rel="icon" href={icon} />
</>
