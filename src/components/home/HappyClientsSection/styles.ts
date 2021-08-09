import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles";

export const HappyClientsSectionWrapper = styled.section`
width:100%;
overflow:hidden;
height:500px;
position:relative;
`;

export const HappyClientsTitle = styled.div`
width:100%;
height:13%;
text-align:center;
&>h3{
  font-size:1.8rem;
  font-weight:500;
  height:100%;
}
`;

export const HappyClients = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
height: 75%;
position:absolute;
left:50%;
top:50%;
transform:translate(-50%, -50%);
display:grid;
align-items:center;
grid-template-columns: 3rem 1fr 3rem;
grid-template-areas: 'scroll_back cards scroll_forward';
@media only screen and (min-width: ${theme.phoneBreakdown}){
  width:70%;
  grid-template-columns: 5rem 1fr 5rem;
}
`}
`;

export const HappyClientsScroll = styled.button`
${({ theme }: { theme: ThemeType }) => css`
background-color:white;
width:90%;
margin:auto;
height:0;
padding-top:100%;
border-radius:50%;
font-size:1.3rem;
border:none;
position:relative;
box-shadow:0px 2px 8px ${theme.colors.grey[100]};
transition: box-shadow 200ms;
&:hover{
  box-shadow:0px 2px 15px ${theme.colors.grey[300]};
}
& > *{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
@media only screen and (min-width: ${theme.phoneBreakdown}){
  font-size:2rem;
}
`}
`;

export const HappyClientsScrollBack = styled(HappyClientsScroll)`
grid-area: scroll_back;
`;

export const HappyClientsScrollForward = styled(HappyClientsScroll)`
grid-area: scroll_forward;
`;

export const HappyClientsCards = styled.div`
grid-area:cards;
display:flex;
justify-content:space-around;
align-items:center;
height:100%;
`;

export const HappyClientCard = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:320px;
height:90%;
background-color:white;
border-radius:25px;
box-shadow:0px 0px 8px ${theme.colors.grey[200]};
display:flex;
justify-content:center;
align-items:center;
`}`;

export const TiltedBg = styled.div`
${({ theme }: { theme: ThemeType }) => css`
position:absolute;
width:160%;
height:100%;
top:30%;
left:-10px;
background-color:${theme.colors.secondary[400]};
transform: rotate(-4deg);
`}
`;
