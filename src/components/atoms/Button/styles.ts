import styled from "styled-components";

export const Wrapper = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 3rem;
border: none;
background-color: var(--primary-color);
color: var(--light-color);
border-radius: var(--border-radius-sm);
font-size: var(--text-size-md);
font-weight: var(--text-weight-medium);
text-transform: uppercase;
cursor: pointer;
text-decoration: none;
&.light-primary-bg-color{
  background-color: var(--primary-color-transparent-1);
  color: var(--dark-color);
}
&.secondary-bg-color{
  background-color: var(--secondary-color);
  color: var(--light-color);
}
&.light-secondary-bg-color{
  background-color: var(--secondary-color-transparent-1);
  color: var(--dark-color);
}
&.grey-bg-color{
  background-color: var(--grey-color);
  color: var(--light-color);
}
&.light-grey-bg-color{
  background-color: var(--grey-color-transparent-1);
  color: var(--dark-color);
}
&.dark-bg-color{
  background-color: var(--dark-color);
  color: var(--light-color);
}
&.light-dark-bg-color{
  background-color: var(--dark-color-transparent-1);
  color: var(--dark-color);
}
`