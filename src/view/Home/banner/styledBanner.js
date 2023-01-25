import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin:0 auto;
  padding-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  font-family: "Cabin", sans-serif;

  img {
    height: 20.25rem;
    width: auto;
    margin-top: 1.875rem;
  }

  @media (max-width: 768px) {
    img {
      margin-top: 4rem;
      height: 23rem;
    }
  }

  @media (max-width: 425px) {
    padding: 20px;
    img {
      margin-top: 16rem;
      height: 21rem;
    }
  }

  @media (max-width: 375px) {

    img {
      margin-top: 16rem;
      height: 18rem;
    }
  }
`;

export const ContentBanner = styled.div`
  width: 100%;
  max-width: 35.875rem;
  height: 16.063rem;

  h1 {
    font-weight: 700;
    text-align: left;

    color: #002163;
    font-size: 3rem;
    line-height: 55px;
  }
  p {
    letter-spacing: 0.2px;
    line-height: 24px;
    margin-top: 1.5rem;
    color: #6d6d6d;
  }

  button {
    margin-top: 33px;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    max-width: 44rem;
  }
`;
