import * as React from "react"
import icon from "../images/icon.png"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>Homepage</div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Stephen Ng'ang'a</title>
  <link rel="icon" href={icon} />
</>
