import { motion } from "motion/react"
import styled from "styled-components";

export const Wrapper = styled(motion.li)`
    display: block;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
    &:last-child {
        border-bottom: none;
    }
`;