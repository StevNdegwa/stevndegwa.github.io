import styled from "styled-components";


export const ContactMeSectionWrapper = styled.div`
  min-height: 400px;
  max-width:500px;
  margin:1rem;
  & > *{
    margin: 1rem 0;
  }
  &> textarea{
    min-height: 200px;
  }
  &>button{
    width:100%;
    height:3rem;
  }
`;
