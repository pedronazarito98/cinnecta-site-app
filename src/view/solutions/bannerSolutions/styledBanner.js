import styled from "styled-components";

export const StyledBannerSolutions = styled.section`
  width: 100%;
  max-width: 76.25rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;

  font-family: "Cabin", sans-serif;

  img {
    height: 28rem;
    width: auto;
    margin-top: 1.875rem;
  }

  @media (max-width: 1024px) {
    img {
      margin-top: 4rem;
      height: 23rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      flex: none;
    }
  }

  @media (max-width: 425px) {
    padding: 20px;
    img {
      height: 19rem;
    }
  }
  @media (max-width: 320px) {
    img {
      height: 16rem;
    }
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    margin: 0.875rem 0;
  }

  @media (max-width: 768px) {
    max-width: 41.563rem;
    justify-content: center;
  }
`;
