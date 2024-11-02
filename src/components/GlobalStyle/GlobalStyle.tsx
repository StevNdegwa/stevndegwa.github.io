/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import { createGlobalStyle } from 'styled-components'
import { lighten } from "polished"

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
    
    :root {
        --text-color: #003363;
        --bg-color: #ffffff;
        --border-color: ${lighten(0.8, "#012444")};
    }
    
    body {
        color: var(--text-color);
        padding: 0;
        margin: 0;
        background-color: var(--bg-color);
        font-family: "Urbanist", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
`