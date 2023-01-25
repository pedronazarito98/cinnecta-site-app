import styled from "styled-components";

export const ContainerLocation = styled.section`
  width: 100%;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  margin: 2.813rem auto;
  gap: 0.5rem;
  padding: 1rem;

  span {
    font-size: 1rem;
    line-height: 1.5rem;

    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text);
  }

  img {
    margin: 2.25rem auto;
    height: 100%;
    max-height: 27.1875rem;
    width: auto;
    @media (max-width: 48rem){
      max-height: 15.625rem;
    }
    @media (max-width: 27.1875rem){
      max-height: 9.375rem;
    }
  }
`;
