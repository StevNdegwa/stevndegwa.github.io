import * as React from "react"

import Black from "./src/fonts/Urbanist/static/Urbanist-Black.ttf"
// import BlackItalic from "./src/fonts/Urbanist/static/Urbanist-BlackItalic.ttf"
// import Bold from "./src/fonts/Urbanist/static/Urbanist-Bold.ttf"
// import BoldItalic from "./src/fonts/Urbanist/static/Urbanist-BoldItalic.ttf"
// import ExtraBold from "./src/fonts/Urbanist/static/Urbanist-ExtraBold.ttf"
// import ExtraBoldItalic from "./src/fonts/Urbanist/static/Urbanist-ExtraBoldItalic.ttf"
// import ExtraLight from "./src/fonts/Urbanist/static/Urbanist-ExtraLight.ttf"
// import ExtraLightItalic from "./src/fonts/Urbanist/static/Urbanist-ExtraLightItalic.ttf"
// import Italic from "./src/fonts/Urbanist/static/Urbanist-Italic.ttf"
// import Light from "./src/fonts/Urbanist/static/Urbanist-Light.ttf"
// import LightItalic from "./src/fonts/Urbanist/static/Urbanist-LightItalic.ttf"
// import Medium from "./src/fonts/Urbanist/static/Urbanist-Medium.ttf"
// import MediumItalic from "./src/fonts/Urbanist/static/Urbanist-MediumItalic.ttf"
import Regular from "./src/fonts/Urbanist/static/Urbanist-Regular.ttf"
import SemiBold from "./src/fonts/Urbanist/static/Urbanist-SemiBold.ttf"
// import SemiBoldItalic from "./src/fonts/Urbanist/static/Urbanist-SemiBoldItalic.ttf"
// import Thin from "./src/fonts/Urbanist/static/Urbanist-Thin.ttf"
// import ThinItalic from "./src/fonts/Urbanist/static/Urbanist-ThinItalic.ttf"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={Regular}
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])

  setHeadComponents([
    <link
      rel="preload"
      href={Black}
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])

  setHeadComponents([
    <link
      rel="preload"
      href={SemiBold}
      as="font"
      type="ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}