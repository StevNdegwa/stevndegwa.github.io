import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const WhatIDoSectionWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width 100%;
  background-color: ${theme.colors.dark};
`}
`;

export const WhatIDoTitle = styled.div`
${({ theme }: { theme: ThemeType }) => css`
height:3rem;
text-align:center;
&>h2{
  color:${theme.colors.primary[300]};
  font-weight:500;
}
&>h4{
  color:${theme.colors.light};
  font-weight:300;
}
`}
`;

export const WhatIDoCards = styled.div`
padding:1rem;
display:flex;
justify-content:space-around;
`;

export const WhatIDoCard = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width:270px;
  height:320px;
  border-radius:8px;
  overflow:hidden;
  font-weight:900;
  &>figure{
    height:40%;
    width:100%;
    background-color:white;
  }
  &>div{
    height:60%;
    width:100%;
    background-color:${theme.colors.secondary[300]};
    text-align:center;
    color:white;
    padding:0.8rem;
    display:flex;
    justify-content:center;
    font-size:2rem;
  }
`}`;
