import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const WhatIDoSectionWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width 100%;
  background-color: ${theme.colors.dark};
  box-shadow: 0px 0px 6px inset ${theme.colors.grey[900]}; 
`}
`;

export const WhatIDoTitle = styled.div`
${({ theme }: { theme: ThemeType }) => css`
height:5rem;
text-align:center;
&>h3{
  color:${theme.colors.primary[300]};
  font-weight:300;
  line-height:3rem;
}
&>h4{
  color:${theme.colors.light};
  font-weight:300;
  line-height:2rem;
  font-style: italic;
}
`}
`;

export const WhatIDoCards = styled.div`
padding:1rem;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
`;

export const WhatIDoCard = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width:270px;
  height:320px;
  border-radius:8px;
  overflow:hidden;
  font-weight:900;
  margin:0.5rem;
  cursor:pointer;
  box-shadow:none;
  transition: box-shadow 500ms;
  &:hover{
    box-shadow: 0px 0px 12px ${theme.colors.grey[400]};
  }
  &>figure{
    height:40%;
    width:100%;
    background-color:white;
    position:relative;
    &>img{
      height:100%;
      max-width:100%;
      position:absolute;
      left:50%;
      transform:translate(-50%); 
    }
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
