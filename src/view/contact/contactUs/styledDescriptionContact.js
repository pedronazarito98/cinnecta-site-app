import styled from "styled-components";

export const ContainerContato = styled.section`
  width: 100%;
  max-width: 76.25rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  margin: 4rem auto;
  padding: 1.5rem;

  @media (max-width: 48rem) {
    margin: 0.875rem auto;
    justify-content: center;
  }
`;
