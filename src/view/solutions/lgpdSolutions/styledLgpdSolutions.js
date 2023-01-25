import styled from "styled-components";

export const ContainerLgpdSolutions = styled.section`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content:center;

  margin: 64px 0;

  @media (max-width: 768px) {
    margin: 58px 0;
  }

  @media (max-width: 425px) {
    img {
      height: 19rem !important;
    }
  }
`;
