import styled from "styled-components";

export const ContainerStamps = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.25rem;
  padding-top: 1.875rem;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: 77rem;
  margin: 2.875rem auto;

  img {
    height: 24rem;
    width: auto;
  }

  @media (max-width: 22.5rem) {
    img {
      height: 16rem;
    }
  }

  @media (max-width: 20rem) {
    img {
      height: 18rem;
    }
  }
`;

export const WrapperStamps = styled.div`
  width: 100%;
  padding: 1.5rem;
  max-width: 31.25rem;
  flex-direction: column;
`;
