import styled from "styled-components";


export const ContactMeSectionWrapper = styled.div`
  height: 400px;
  width:100%;
  margin:1rem;
  display:flex;
  &>section{
    height:100%;
    min-width:500px;
    width:50%;
    padding:0.3rem 1rem;
    &:last-of-type{
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
    }
  }
`;
