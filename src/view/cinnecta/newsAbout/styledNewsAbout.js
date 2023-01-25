import styled from "styled-components";

export const ContainerNewsAbout = styled.section`
  width: 100%;
  max-width: 88rem;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  margin: 2.813rem auto;
  gap: 0.5rem;
  padding: 1rem;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;

  margin: 2.5rem 0;

  img {
    height: 3.5rem;
    width: auto;
    margin: 1.9rem 1.6rem;
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
