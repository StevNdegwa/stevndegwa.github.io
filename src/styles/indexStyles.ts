import styled from "styled-components"

export const IntroSection = styled.section`
  width: 100%;
  height: 300px;
  position: relative;
  & > div {
    width: 340px;
    display: flex;
    position: absolute;
    right: 20px;
    top: 50px;
    & > div {
      padding: 0.5rem;
      &:first-of-type {
        width: 230px;
        text-align: right;
        & > div {
          &:first-of-type {
            font-size: 1.4rem;
            color: hsla(145, 61%, 59%, 1);
            text-align: left;
            border-bottom: 4px double hsla(145, 61%, 59%, 1);
          }
          &:last-of-type {
            font-size: 3rem;
            font-weight: bolder;
          }
        }
      }
      &:last-of-type {
        width: 100px;
        text-align: left;
        font-size: 1.3rem;
        font-family: "Merienda", cursive;
        color: hsla(200, 16%, 62%, 1);
        & > span {
          font-weight: 600;
        }
      }
    }
  }
  @media only screen and (min-width: 641px) and (max-width: 768px) {
    & > div {
      width: 390px;
      right: 100px;
      top: 70px;
      & > div {
        &:first-of-type {
          width: 270px;
          & > div {
            &:first-of-type {
              font-size: 1.4rem;
            }
            &:last-of-type {
              font-size: 3.8rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    & > div {
      width: 450px;
      right: 200px;
      top: 70px;
      & > div {
        &:first-of-type {
          width: 320px;
          & > div {
            &:first-of-type {
              font-size: 1.5rem;
            }
            &:last-of-type {
              font-size: 4.5rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1281px) {
    & > div {
      width: 470px;
      right: 300px;
      top: 70px;
      & > div {
        &:first-of-type {
          width: 350px;
          & > div {
            &:first-of-type {
              font-size: 1.8rem;
            }
            &:last-of-type {
              font-size: 5rem;
            }
          }
        }
      }
    }
  }
`
