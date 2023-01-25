import styled from "styled-components";

export const ContainerContato = styled.section`
  width: 100%;
  /* max-width: 1170px; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  margin: 64px auto;
  padding: 24px;

  @media (max-width: 768px) {
    margin: 14px auto;
    justify-content: center;
  }
`;
