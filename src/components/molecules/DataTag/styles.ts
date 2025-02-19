import styled from "styled-components";
import { FlexBox } from "../FlexBox";

export const Wrapper = styled(FlexBox)`
width: fit-content;
padding: 4px 12px;
background-color: var(--dark-color-transparent-05);
cursor: default;
box-sizing: border-box;
&:hover {
    background-color: var(--secondary-color);
    font-weight: var(--text-weight-medium);
}
`;