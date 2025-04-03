import styled from "styled-components";

export const Wrapper = styled.input`
  display: block;
  width: 100%;
  background-color: var(--dark-color-transparent-05);
  border: none;
  height: 3rem;
  padding: 0 1rem;
  border-radius: var(--border-radius-sm);
  &::placeholder {
    color: var(--grey-color-transparent-7);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--dark-color);
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
  }
`;
