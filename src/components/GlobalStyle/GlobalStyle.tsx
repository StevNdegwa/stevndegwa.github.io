/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";
import font from "../../fonts/Urbanist/Urbanist-VariableFont_wght.ttf";

console.log(font);

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`

    @font-face {
        font-family: Urbanist;
        src: url(${font});
    }

    :root {
        --text-color: #003363;
        --bg-color: #ffffff;
        --border-color: ${lighten(0.8, "#012444")};
        --primary-color: #00FF38;
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
        font-family: Urbanist;
    }
`;
