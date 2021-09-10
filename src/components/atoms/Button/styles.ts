import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";
import { ColorType } from "../types";

export const ButtonWrapper = styled.button`
${({ raised, color, theme }: { raised: boolean; color: ColorType; theme: ThemeType }) => css`
padding: 0.6rem 1rem;
border: none;
font-weight:600;
font-size:1rem;
color:inherit;
border-radius:25px;
min-width:180px;
min-height: 3rem;
width:fit-content;
text-transform:uppercase;
& > figure{
    display:inline-block;
    margin:0.2rem;
    color:white;
}
${raised && css`box-shadow: 0px 0px 8px ${theme.colors.grey[200]};`}
${color === "primary" ?
            css`
  background-color: ${theme.colors.primary[400]};
  color: white;
  ` :
            color === "secondary" ?
                css`
  background-color: ${theme.colors.secondary[500]};
  color: white;
  ` :
                color === "tertiary" ?
                    css`
  background-color: ${theme.colors.tertiary[500]};
  color: white;
  `
                    :
                    css`background-color:transparent`
        };
`}

`;