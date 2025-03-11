import styled from "styled-components";

export const Wrapper = styled.span`
color: var(--dark-color);
font-size: var(--text-size-md);
font-family: var(--font-family);
&.outline-text-variant{
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
}
&.text-align-left{
    text-align: left;
}
&.text-align-center{
    text-align: center;
}
&.text-align-right{
    text-align: right;
}
&.text-transform-capitalize{
    text-transform: capitalize;
}
&.text-transform-uppercase{
    text-transform: uppercase;
}       
&.text-transform-lowercase{
    text-transform: lowercase;
}

`;