import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const RadioWrapper = styled.div`
  height: 2rem;
  position: relative;
  padding-left: 1.5rem;
`;

export const RadioInput = styled.input`
${({ theme }: { theme: ThemeType }) => css`
position: absolute;
width: 1rem;
height: 1rem;
left: 0;
top: 0.3rem;
opacity: 0;
cursor: pointer;
&:checked + div {
  overflow: hidden;
  color: ${theme.colors.secondary[500]};
  border: 1px solid ${theme.colors.secondary[500]};
}
&:focus + div {
  box-shadow: 0px 0px 3px ${theme.colors.secondary[500]};
}
&:disabled + div {
  color: ${theme.colors.secondary[100]};
  border: 1px solid ${theme.colors.secondary[100]};
  background-color: ${theme.colors.secondary[100]};
}
&:disabled:checked + div {
  color: ${theme.colors.secondary[100]};
  border: 1px solid ${theme.colors.secondary[100]};
  background-color: transparent;
}`}
`;

export const RadioLabel = styled.label`
  line-height: 2rem;
`;

export const RadioIcon = styled.div`
${({ invalid, theme }: { invalid: boolean; theme: ThemeType }) => css`
  z-index: 2;
  width: 1rem;
  height: 1rem;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0.3rem;
  color: white;
  border: 2px solid ${theme.colors.grey[400]};
  ${invalid &&
    css`
      color: white;
      border-color: ${theme.colors.error[500]};
    `}
  `}
`;
