import styled from "styled-components";

export const MySkillsWrapper = styled.div`
text-align:center;
`;

export const MySkillsTitle = styled.h1`
height:60px;
font-weight:500;
font-family: "Merienda", cursive;
`;

export const MySkillsList = styled.ul`
display:flex;
list-style-type:heavy_check;
justify-content: center;
flex-wrap:wrap;
& > li{
  margin: 0.2rem 1rem;
}
`;