import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
${({ color }: { color: any }) => css`
padding:0.4rem;
background-color:transparent;
border:none;
font-size:1.5rem;
color:${
  color === "primary" ?
  "#ce6d17" : color === "secondary" ?
    "#2db868" : color === "tertiary" ?
      "#637984" : "inherit"
  };
`}
`;