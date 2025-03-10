import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100%;
background: 
linear-gradient(90deg, var(--grey-color-transparent-05) 33%, var(--grey-color-transparent-1) 50%, var(--grey-color-transparent-05) 66%)
var(--light-color-transparent-05);
background-size:300% 100%;
animation: l1 1s infinite linear;
@keyframes l1 {
  0% {background-position: right}
}
`
