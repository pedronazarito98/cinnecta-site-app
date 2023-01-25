import styled from "styled-components";

export const ContainerCulture = styled.section`
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

export const WrapperContent = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1.25rem;
`;

export const WrapperImage = styled.div`
  width: 100%;
  max-width: 516px;
  margin-top: 5.25rem;

  img {
    height: 100%;
    max-height: 496px;
    width: auto;

    filter: drop-shadow(0 0.25rem 0.25rem rgb(0 0 0 / 25%));
  }

  @media (max-width: 425px) {
    img {
      max-height: 292px;
    }
  }
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 0;
  gap: 1.5rem;

  width: 100%;
  max-width: 30.25rem;
`;

export const PillarsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.5rem 1.75rem;
  gap: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 27.25rem;

  background: var(--background-card);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.625rem;

  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    height: 2.375rem;
    width: auto;
  }

  span {
    color: var(--blue-50);
    font-family: Cabin;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0.016rem;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    svg {
      margin-left: auto;
      color: #c3c3c3;
      font-size: 32px;
      cursor: pointer;
    }
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
`;

export const VisibleDescription = styled(ContainerDescription)`
  p {
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.2px;

    color: var(--text);
  }
`;
