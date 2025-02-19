import styled from "styled-components";
import { FlexBox } from "../FlexBox";

export const Wrapper = styled(FlexBox)`
padding: 1rem;
display: inline-flex;
background-color: var(--grey-color-transparent-05);
backdrop-filter: blur(20px);
cursor: pointer;
`;