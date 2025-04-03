import styled from "styled-components";

export const Wrapper = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  background-color: var(--dark-color-transparent-05);
  border: none;
  min-height: 6rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  &::placeholder {
    color: var(--grey-color-transparent-7);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--dark-color);
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
  }
`;
