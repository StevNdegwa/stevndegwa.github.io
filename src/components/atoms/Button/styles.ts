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
  padding: 0 1rem;
  transition: all 0.2s;
  &.light-primary-bg-color {
    background-color: var(--primary-color-transparent-1);
    color: var(--dark-color);
  }
  &.secondary-bg-color {
    background-color: var(--secondary-color);
    color: var(--light-color);
    &.outline-style {
      background-color: transparent;
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
      &:hover {
        background-color: var(--secondary-color);
        color: var(--light-color);
      }
    }
  }
  &.light-secondary-bg-color {
    background-color: var(--secondary-color-transparent-1);
    color: var(--dark-color);
    &.outline-style {
      background-color: transparent;
      border: 1px solid var(--secondary-color-transparent-1);
      color: var(--secondary-color-transparent-1);
    }
  }
  &.grey-bg-color {
    background-color: var(--grey-color);
    color: var(--light-color);
  }
  &.light-grey-bg-color {
    background-color: var(--grey-color-transparent-1);
    color: var(--dark-color);
  }
  &.dark-bg-color {
    background-color: var(--dark-color);
    color: var(--light-color);
    &.outline-style {
      background-color: transparent;
      border: 1px solid var(--dark-color);
      color: var(--dark-color);
      &:hover {
        background-color: var(--dark-color);
        color: var(--light-color);
      }
    }
  }
  &.light-dark-bg-color {
    background-color: var(--dark-color-transparent-7);
    color: var(--light-color);
    &.outline-style {
      background-color: transparent;
      border: 1px solid var(--dark-color-transparent-7);
      color: var(--dark-color-transparent-7);
      &:hover {
        background-color: var(--dark-color-transparent-7);
        color: var(--light-color);
      }
    }
  }
  &.light-dark-bg-color {
    background-color: var(--dark-color-transparent-1);
    color: var(--dark-color);
  }
  &.sm-size {
    height: 2rem;
    font-size: var(--text-size-sm);
  }
  &.md-size {
    height: 3rem;
    font-size: var(--text-size-md);
  }
  &.lg-size {
    height: 4rem;
    font-size: var(--text-size-lg);
  }
  &.outline-style {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    &:hover {
      background-color: var(--primary-color);
      color: var(--light-color);
    }
  }
  &.fill-style {
    background-color: var(--primary-color);
    color: var(--light-color);
  }
  &.plain-style {
    background-color: transparent;
    color: var(--primary-color);
  }

  &:disabled {
    background-color: var(--grey-color-transparent-7);
    color: var(--light-color);
    cursor: not-allowed;
    border: none;
    &:hover {
      background-color: var(--grey-color-transparent-7);
      color: var(--light-color);
    }
  }
`;
