import styled from "styled-components";
import { Box, Text } from "@components/atoms";

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

export const BadgesCertificationsItems = styled.ul`
  list-style-type:none;
  display:flex;
  flex-wrap:wrap;
`;
