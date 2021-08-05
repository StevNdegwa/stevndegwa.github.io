import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const AboutMeSectionWrapper = styled.section`
width:100%;
overflow:hidden;
height:400px;
position:relative;
`;

export const TiltedBg = styled.div`
${({ theme }: { theme: ThemeType }) => css`
position:absolute;
width:160%;
height:100%;
top:30%;
left:-10px;
background-color:${theme.colors.secondary[400]};
transform: rotate(-4deg);
`}
`;
