import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const BadgesCertificationsWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
min-height: 400px;
padding:1rem 0;
overflow:hidden;
background-color:${theme.colors.grey[100]};
`}
`;

export const BadgesCertificationsTitle = styled.h1`
text-align:center;
height:4rem;
font-family: "Merienda", cursive;
`;

export const BadgesCertificationsItems = styled.ul`
  list-style-type:none;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`;

export const Item = styled.li`
${({ theme }: { theme: ThemeType }) => css`
width: 300px;
height: 300px;
display: flex;
background-color: ${theme.colors.light};
flex-direction:column;
justify-content:space-around;
border-radius:15px;
margin:1rem;
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
