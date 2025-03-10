import styled from "styled-components";
import { Box, Text } from "@components/atoms";
import { motion } from "motion/react";

export const BadgesCertificationsWrapper = styled(Box)`
background-color:var(--primary-color-transparent-1);
`;

export const BadgeTitle = styled(Text)`
text-align:left;
width: 150px;
`;

export const BadgeIcon = styled(Box)`
width: 40px;
height: 40px;
overflow:hidden;
& img {
  width: 100%;
}
`;


export const IconContainer = styled(motion.div)`
width: 30px;
height: 30px;
display: inline-flex;
justify-content: center;
align-items: center;
`