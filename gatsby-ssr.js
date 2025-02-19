import * as React from "react"

import Urbanist from "./src/assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={Urbanist}
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}