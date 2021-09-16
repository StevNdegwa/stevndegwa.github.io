import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles";

export const CardWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:150px;
height:150px;background-color:hsla(360, 100%, 100%, 0.8);
backdrop-filter: blur(20px);
box-shadow: 0px 0px 15px ${theme.colors.grey[200]};
border-radius:25px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px 4px 4px ${theme.colors.grey[100]};
margin: 10px;
transform: scale(0.5);
transition: transform 500ms;
&:hover{
  box-shadow: 0px 4px 10px ${theme.colors.grey[100]};
}
&>div{
  width:100px;
  max-height:100px;
  height:fit-content;
}
@media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
  width:200px;
  height:200px;
  border-radius:25px;
  box-shadow: 0px 8px 25px ${theme.colors.grey[100]};
  &>div{
    width:150px;
    max-height:150px;
  }
}
@media only screen and (min-width: ${theme.desktop2}){
  width:300px;
  height:300px;
  border-radius:50px;
  box-shadow: 0px 8px 25px ${theme.colors.grey[100]};
  &>div{
    width:200px;
    max-height:200px;
  }
}
`}
`;

export const CardIcon = styled.div`
${({ theme }: { theme: ThemeType }) => css`
  width:80px;
  height:80px;
  margin:auto;
  &>img{
    width:100%;
  }
  @media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
    width:80px;
    height:80px;
  }
  @media only screen and (min-width: ${theme.desktop2}){
    width:120px;
    height:120px;
  }
  
`}
`;

export const CardText = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100px;
max-height:80px;
text-align:center;
font-size: 1rem;
font-weight:500;
@media only screen and (min-width: ${theme.tabletBreakdown2}) and (max-width:${theme.desktop2}){
  font-size: 1rem;
  font-weight:600;
  width:150px;
}
@media only screen and (min-width: ${theme.desktop2}){
  font-size: 1.5rem;
  font-weight:600;
  width:200px;
}
`}
`;

