import styled from "styled-components";
import { Content } from "../../Content";

export const BadgesCertificationsWrapper = styled.div`
background-color:var(--badgesAndCertificationBg);
position:relative;
background-color: rgba(0, 255, 56, 0.1);
padding: 40px 0;
margin-top: 100px;
`;

export const StyledContent = styled(Content)`
display: flex;
flex-direction: column;
gap: 40px;
`

export const BadgeTitle = styled.h2`
text-align:left;
`

export const BadgesCertificationsItems = styled.ul`
  list-style-type:none;
  display:flex;
  flex-wrap:wrap;
`;

export const Item = styled.li`
width: 240px;
height: 240px;
display: flex;
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(20px) ;
box-shadow: 0px 0px 15px var(--shadowColor);
flex-direction:column;
justify-content:space-around;
border-radius:15px;
margin: 0.5rem 1rem 1rem 0;
box-shadow:none;
transition:box-shadow 500ms;
cursor:pointer;
&:hover{
  box-shadow: 0px 0px 25px var(--shadowColor);
  background-color:rgba(255, 255, 255, 0.8);
}
&>section{
  height:40px;
  width: 210px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  text-align:center;
  font-size:1rem;
  font-weight: 500;
  text-align:center;
  border-radius: 8px;
  &>div{
    box-shadow: 0px 0px 8px var(--shadowColor);
    border-radius: 8px;
    &:first-of-type{
      width:60px;
      height:60px;
      font-size: 30px;
      display:flex;
      justify-content:center;
      align-items:center;
      & > a{
        display:inline-block;
        width:60px;
        height:60px;
        &>img{
          width:100%;
          height:100%;
          border-radius: 8px;
        }
      }
    }
    &:last-of-type{
      width: 140px;
      height:60px;
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }
  &:last-of-type{
    height:50px;
    line-height: 50px;
    box-shadow: 0px 0px 8px var(--shadowColor);
    & > a{
      text-decoration:none;
      color:inherit;
      margin:auto;
    }
  }
}
`;