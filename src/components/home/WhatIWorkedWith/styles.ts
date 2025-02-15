import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 30px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 0px;
  & > li:not(:last-child)::after {
    content: "\\00a0\\00a0\\00a0/\\00a0\\00a0\\00a0";
  }
`;