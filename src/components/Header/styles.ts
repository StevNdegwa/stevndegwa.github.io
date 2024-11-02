/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */


import styled from "styled-components"

export const Wrapper = styled.header`
    height: 80px;
    color: var(--text-color);

    @media(min-width: 481px) {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media (min-width: 769px) and (max-width: 1279px) {
        height: 120px;
    }
    
    @media (min-width: 1280px) {
        height: 140px;
    }
`

export const NavContainer = styled.nav`
    height: 80px;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-around;
    width: 100%;

    @media(min-width: 481px) {
        border: 1px solid var(--border-color);
        border-radius:40px;
        width: fit-content;
        padding: 0 40px;
        gap: 40px;
    }
`
export const NavItem = styled.a`
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`