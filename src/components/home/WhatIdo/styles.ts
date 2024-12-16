import styled from "styled-components";
import { Content } from "../../Content";

export const Wrapper = styled(Content)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;