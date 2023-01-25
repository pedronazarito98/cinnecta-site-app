import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 0 auto;
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

  @media (max-width: 48rem) {
    img {
      margin-top: 4rem;
      height: 23rem;
    }
  }

  @media (max-width: 26.5625rem) {
    padding: 1.25rem;
    img {
      margin-top: 16rem;
      height: 18rem;
    }
  }

  @media (max-width: 23.4375rem) {
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
    line-height: 3.4375rem;
  }
  p {
    letter-spacing: 0.0125rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    color: #6d6d6d;
  }

  button {
    margin-top: 2.0625rem;
  }

  @media (max-width: 48rem) {
    padding-top: 2rem;
    max-width: 44rem;
  }
`;
