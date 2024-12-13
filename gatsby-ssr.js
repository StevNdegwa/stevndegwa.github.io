import * as React from "react"
import font from "./src/fonts/Urbanist/Urbanist-VariableFont_wght.ttf"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={font}
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}