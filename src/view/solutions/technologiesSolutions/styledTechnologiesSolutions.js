import styled from "styled-components";

export const StyledTechnologiesSolutions = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 64px 0;

  button {
    margin-top: 32px;
  }
`;

export const ContainerCardTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 83rem;

  @media (max-width: 947px){
    justify-content:center;
  }
`;

