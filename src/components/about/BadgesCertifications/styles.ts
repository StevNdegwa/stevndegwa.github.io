import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const BadgesCertificationsWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
background-color:${theme.colors.grey[100]};
position:relative;
`}
`;

export const Circle1 = styled.div`
${({ theme }: { theme: ThemeType }) => css`
position: absolute;
background-color:${theme.colors.secondary[200]};
width:200px;
height:200px;
border-radius: 50%;
left:50%;
top:25%;
transform: translate(-100px, 0px);
`}
`;

export const Circle2 = styled.div`
${({ theme }: { theme: ThemeType }) => css`
position: absolute;
background-color:${theme.colors.primary[200]};
width:300px;
height:300px;
border-radius: 50%;
left:50%;
top:100%;
transform: translate(-500px, -350px);
`}
`;

export const BadgesCertificationsTitle = styled.h1`
text-align:center;
height:4rem;
padding-top:1rem;
font-family: "Merienda", cursive;
`;

export const BadgesCertificationsItems = styled.ul`
${({ theme }: { theme: ThemeType }) => css`
  list-style-type:none;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  @media only screen and (min-width: ${theme.phoneBreakdown}){
    justify-content:space-between;
  }
`}
`;

export const Item = styled.li`
${({ theme }: { theme: ThemeType }) => css`
width: 300px;
height: 300px;
display: flex;
background-color:hsla(360, 100%, 100%, 0.4);
backdrop-filter: blur(20px);
box-shadow: 0px 0px 15px ${theme.colors.grey[200]};
flex-direction:column;
justify-content:space-around;
border-radius:15px;
margin: 0.5rem 1rem 1rem 0;
box-shadow:none;
transition:box-shadow 500ms;
&:hover{
  box-shadow: 0px 0px 25px ${theme.colors.grey[300]};
}
&>section{
  height:70px;
  width: 270px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  text-align:center;
  font-size:1.1rem;
  font-weight: bold;
  text-align:center;
  border-radius: 8px;
  &>div{
    box-shadow: 0px 0px 8px ${theme.colors.grey[100]};
    border-radius: 15px;
    &:first-of-type{
      width:70px;
      height:70px;
      font-size: 40px;
      display:flex;
      justify-content:center;
      align-items:center;
      & > a{
        display:inline-block;
        width:70px;
        height:70px;
        &>img{
          width:100%;
          height:100%;
          border-radius: 15px;
        }
      }
    }
    &:last-of-type{
      width: 180px;
      height:70px;
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }
  &:last-of-type{
    line-height: 70px;
    box-shadow: 0px 0px 8px ${theme.colors.grey[100]};
    & > a{
      text-decoration:none;
      color:inherit;
      margin:auto;
    }
  }
}
`}
`
