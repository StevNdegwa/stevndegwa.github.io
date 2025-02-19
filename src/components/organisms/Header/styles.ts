/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */


import { FlexBox } from "@components/molecules"
import styled from "styled-components"

export const NavContainer = styled(FlexBox)`
    height: 80px;
    margin: 20px auto;

    @media(min-width: 481px) {
        width: fit-content;
        padding: 0 40px;
    }
`
