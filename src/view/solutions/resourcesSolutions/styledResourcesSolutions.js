import styled from "styled-components";

export const ContainerResources = styled.section`
  width: 100%;
  max-width: 72.25rem;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  img {
    height: 388px;
    width: auto;
  }

  @media (max-width: 947px) {
    img {
      margin-top: 2rem;
      height: 336px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      margin-top: 2rem;
      height: 23rem;
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
      height: 18rem;
    }
  }
`;
