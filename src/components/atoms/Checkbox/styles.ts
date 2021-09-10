import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const CheckboxWrapper = styled.div`
  height: 50px;
  position: relative;
  padding-left: 50px;
`;

export const CheckboxInput = styled.input`
${({ theme }: { theme: ThemeType }) => css`
  position: absolute;
  width:30px;
  height:30px;
  left: 0;
  top: 0.5rem;
  opacity: 0;
  cursor: pointer;
  &:checked + div {
    color: white;
    background-color: ${theme.colors.secondary[500]};
    border: 2px solid ${theme.colors.secondary[500]};
    &:focus + div {
      box-shadow: 0px 0px 3px ${theme.colors.secondary[200]};
    }
  }

  &:focus + div {
    box-shadow: 0px 0px 3px ${theme.colors.secondary[200]};
    border: 2px solid ${theme.colors.secondary[500]};
  }
  &:disabled + div {
    background-color: ${theme.colors.secondary[100]};
    border-color: ${theme.colors.secondary[100]};
  }
  &:disabled:not(:checked) + div {
    color: ${theme.colors.secondary[100]};
  }
`}
`;

export const CheckboxLabel = styled.label`
  line-height: 50px;
`;

export const CheckboxIcon = styled.div`
  ${({ invalid, theme }: { invalid: boolean; theme: ThemeType }) => css`
    z-index: 2;
    width: 30px;
    height: 30px;
    overflow: hidden;
    font-size: 1.2rem;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    border: 2px solid ${theme.colors.grey[400]};
    color: ${theme.colors.grey[100]};
    background-color: ${theme.colors.grey[100]};
    transition: background-color 100ms;
    ${invalid &&
    css`
      color: white;
      border-color: ${theme.colors.error[500]};
    `}
  `}
`;
