import { FlexBox } from "@components/molecules";
import styled from "styled-components";

export const TitleSection = styled(FlexBox)`
  max-width: 250px;
  min-width: 250px;
  padding: 0 20px;
  letter-spacing: 4px;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    min-width: 80px;
  }
`;

export const ItemsWrapper = styled(FlexBox)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;
