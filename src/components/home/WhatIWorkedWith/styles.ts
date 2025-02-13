import styled from "styled-components";
import { Content } from "../../Content";

export const Wrapper = styled.div`
  background-color: rgba(0,255,56,0.05);
  margin: 100px 0;
  padding: 100px 0;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: -50px;
  right: 20px;
  max-width: 580px;
  text-align: right;
  color: white;
  text-shadow: 0px 0px 2px var(--text-color);
  letter-spacing: 2px;
  `;

export const StyledContent = styled(Content)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 30px;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 0px;
  & > li:not(:last-child)::after {
    content: "\\00a0\\00a0\\00a0/\\00a0\\00a0\\00a0";
  }
`;