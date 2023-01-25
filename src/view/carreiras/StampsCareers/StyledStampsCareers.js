import styled from "styled-components";

export const ContainerStampsCareers = styled.section`
  width: 100%;
  max-width: 73.125rem;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  margin: 2.813rem auto;
  gap: 0.5rem;
  padding: 1rem;
`;

export const WrapperStamps = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1.75rem;
  margin: 3rem 0;
`;

export const CardStamps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 16.4375rem;

  img {
    height: 10.625rem;
    width: auto;
  }

  span {
    font-family: "Cabin";
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;

    text-align: center;
    letter-spacing: 0.0125rem;
    color: var(--blue-40);
  }
`;
