/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

import Urbanist from "../../fonts/Urbanist/Urbanist-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
    @font-face {
        font-family: Urbanist;
        src: url(${Urbanist});
    }

    :root {
        --dark-color:rgb(1, 36, 68);
        --bg-color:rgb(255, 255, 255);
        --border-color: ${lighten(0.8, "#012444")};
        --primary-color:rgb(0, 255, 56);
        --secondary-color:rgb(248, 222, 57);
        --grey-color:rgb(156, 156, 156);
        --font-family: "Urbanist", sans-serif;

        // transparent colors
        --dark-color-transparent-9: rgba(1, 36, 68, 0.9);
        --dark-color-transparent-7: rgba(1, 36, 68, 0.7);
        --dark-color-transparent-5: rgba(1, 36, 68, 0.5);
        --dark-color-transparent-3: rgba(1, 36, 68, 0.3);
        --dark-color-transparent-1: rgba(1, 36, 68, 0.1);

        --primary-color-transparent-9: rgba(0, 255, 56, 0.9);
        --primary-color-transparent-7: rgba(0, 255, 56, 0.7);
        --primary-color-transparent-5: rgba(0, 255, 56, 0.5);
        --primary-color-transparent-3: rgba(0, 255, 56, 0.3);
        --primary-color-transparent-1: rgba(0, 255, 56, 0.1);

        --secondary-color-transparent-9: rgba(248, 222, 57, 0.9);
        --secondary-color-transparent-7: rgba(248, 222, 57, 0.7);
        --secondary-color-transparent-5: rgba(248, 222, 57, 0.5);
        --secondary-color-transparent-3: rgba(248, 222, 57, 0.3);
        --secondary-color-transparent-1: rgba(248, 222, 57, 0.1);

        --grey-color-transparent-9: rgba(156, 156, 156, 0.9);
        --grey-color-transparent-7: rgba(156, 156, 156, 0.7);
        --grey-color-transparent-5: rgba(156, 156, 156, 0.5);
        --grey-color-transparent-3: rgba(156, 156, 156, 0.3);
        --grey-color-transparent-1: rgba(156, 156, 156, 0.1);

        // border-radius
        --border-radius-xs: 0.25rem;
        --border-radius-sm: 0.5rem;
        --border-radius-md: 1rem;
        --border-radius-lg: 1.5rem;
        --border-radius-xl: 2rem;

        // text-size
        --text-size-xs: 12px;
        --text-size-sm: 14px;
        --text-size-md: 16px;
        --text-size-lg: 18px;
        --text-size-xl: 24px;

        // shadow
        --shadow-xs: 0 2px 4px 1px var(--grey-color-transparent-1);
        --shadow-sm: 0 4px 6px 2px var(--grey-color-transparent-3);
        --shadow-md: 0 6px 8px 8px var(--grey-color-transparent-3);
        --shadow-lg: 0 8px 12px 16px var(--grey-color-transparent-3);
        --shadow-xl: 0 12px 16px 32px var(--grey-color-transparent-3);

        // text-shadow
        --text-shadow-xs: 0 2px 4px 1px var(--dark-color-transparent-1);
        --text-shadow-sm: 0 4px 6px 2px var(--dark-color-transparent-3);
        --text-shadow-md: 0 6px 8px 8px var(--dark-color-transparent-3);
        --text-shadow-lg: 0 8px 12px 16px var(--dark-color-transparent-3);
        --text-shadow-xl: 0 12px 16px 32px var(--dark-color-transparent-3);

        // spacings
        --page-width: 1024px;
        --sections-vertical-margin: 50px;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
        background-color: var(--bg-color);
        color: var(--dark-color);
        font-family: var(--font-family);
    }

    .primary-color-text{
        color: var(--primary-color);
    }
    
    .secondary-color-text{
        color: var(--secondary-color);
    }

    .grey-color-text{
        color: var(--grey-color);
    }

    .dark-color-text{
        color: var(--dark-color);
    }
`;
