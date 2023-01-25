import styled from "styled-components";

export const StyledCardFeatures = styled.div`
  margin: 0.5rem;
  width: 100%;
  max-width: 16rem;
  height: 12.875rem;

  background: var(--background-card);
  border-radius: 1.25rem;
  box-shadow: 0.063rem 0 0.25rem 0 #00000040;

  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1.5rem;

  h2 {
    color: var(--blue-40);
    font-family: Cabin;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.125rem;
    text-align: left;
    display: block;
    width: 100%;
  }

  p {
    margin-top: 0.5rem;
    color: var(--text);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: left;
  }

  @media (max-width: 1024px) {
    max-width: 26rem;
    margin-top: 3.125rem;
    h2 {
      font-size: 1.5rem;
    }

    p {
      margin-top: 1.5rem;
      font-size: 1.12rem;
    }
  }
`;
