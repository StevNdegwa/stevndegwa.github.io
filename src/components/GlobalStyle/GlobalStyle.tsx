/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

import Black from "../../fonts/Urbanist/static/Urbanist-Black.ttf";
// import BlackItalic from "../../fonts/Urbanist/static/Urbanist-BlackItalic.ttf";
// import Bold from "../../fonts/Urbanist/static/Urbanist-Bold.ttf";
// import BoldItalic from "../../fonts/Urbanist/static/Urbanist-BoldItalic.ttf";
// import ExtraBold from "../../fonts/Urbanist/static/Urbanist-ExtraBold.ttf";
// import ExtraBoldItalic from "../../fonts/Urbanist/static/Urbanist-ExtraBoldItalic.ttf";
// import ExtraLight from "../../fonts/Urbanist/static/Urbanist-ExtraLight.ttf";
// import ExtraLightItalic from "../../fonts/Urbanist/static/Urbanist-ExtraLightItalic.ttf";
// import Italic from "../../fonts/Urbanist/static/Urbanist-Italic.ttf";
// import Light from "../../fonts/Urbanist/static/Urbanist-Light.ttf";
// import LightItalic from "../../fonts/Urbanist/static/Urbanist-LightItalic.ttf";
// import Medium from "../../fonts/Urbanist/static/Urbanist-Medium.ttf";
// import MediumItalic from "../../fonts/Urbanist/static/Urbanist-MediumItalic.ttf";
import Regular from "../../fonts/Urbanist/static/Urbanist-Regular.ttf";
import SemiBold from "../../fonts/Urbanist/static/Urbanist-SemiBold.ttf";
// import SemiBoldItalic from "../../fonts/Urbanist/static/Urbanist-SemiBoldItalic.ttf";
// import Thin from "../../fonts/Urbanist/static/Urbanist-Thin.ttf";
// import ThinItalic from "../../fonts/Urbanist/static/Urbanist-ThinItalic.ttf";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`


    @font-face {
        font-family: Urbanist_Regular;
        src: url(${Regular});
    }


    @font-face {
        font-family: Urbanist_Black;
        src: url(${Black});
    }

    @font-face {
        font-family: Urbanist_SemiBold;
        src: url(${SemiBold});
    }

    :root {
        --text-color: #003363;
        --bg-color: #ffffff;
        --border-color: ${lighten(0.8, "#012444")};
        --primary-color: #00FF38;
        --font-black: Urbanist_Black;
        --font-semibold: Urbanist_SemiBold;
        --font-regular: Urbanist_Regular;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: var(--text-color);
        padding: 0;
        margin: 0;
        background-color: var(--bg-color);
        font-family: var(--font-regular);
    }
`;
