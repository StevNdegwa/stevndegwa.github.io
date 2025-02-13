import styled from "styled-components";
import { Content } from "../../Content";

export const Wrapper = styled.div`
  margin: 50px 0;
  padding: 80px 0;
  position: relative;
`;

export const ItemsContainer = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  right: 20px;
  max-width: 580px;
  text-align: right;
  color: white;
  text-shadow: 0px 0px 2px var(--text-color);
  letter-spacing: 2px;
  `;
