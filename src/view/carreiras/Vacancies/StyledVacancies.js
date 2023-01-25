import styled from "styled-components";

export const ContainerVacancies = styled.section`
  width: 100%;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  margin: 2.813rem auto;
  gap: 0.5rem;
  padding: 1rem;
`;

export const CardVacancies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.75rem;
  gap: 0.5rem;

  width: 100%;
  max-width: 18.75rem;
  /* height: 100%;
  max-height: 16.9375rem; */

  background: #fcfcfc;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5625rem;

  flex: none;
  order: 2;
  flex-grow: 0;

  h1 {
    font-family: "Cabin";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;

    letter-spacing: 0.0156rem;

    color: #0055ff;
  }

  span {
    color: var(--blue-50);
    font-family: "Cabin";
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  p {
    color: var(--text);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0125rem;
    text-align: left;
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  max-width: 39.375rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  gap: 1.25rem;

  h2 {
    letter-spacing: 0.0125rem;
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #6d6d6d;
  }
`;

export const WrapperVacancies = styled.div`
  width: 100%;
  max-width: 76.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1.125rem;
`;
