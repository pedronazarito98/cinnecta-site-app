import styled from "styled-components";

export const ContainerCompanies = styled.section`
  width: 100%;
  margin: 0.625rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 26.5625rem) {
    padding: 1.5rem;
    max-width: 42.5625rem;
    flex-direction: column;

    h1 {
      text-align: center;
    }
  }
`;

export const WrapperImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  max-width: 67.8125rem;
  margin: 2.5rem 0;

  img {
    height: 3.5rem;
    width: auto;
    margin: 1.9375rem 1.875rem;
  }

  @media (max-width: 48rem) {
    max-width: 42.5625rem;
  }
  @media (max-width: 26.5625rem) {
    max-width: 17.6875rem;
  }

  @media (max-width: 20rem) {
    max-width: 7.875rem;
  }
`;
