import styled from "styled-components";

export const ContainerTimeline = styled.section`
  width: 100%;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2.5rem;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const WrapperTimerline = styled.div`
  display: flex;
  flex-flow: ${({ direction }) =>
    direction === "row" ? "row wrap" : "row-reverse wrap"};
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
  gap: 5rem;
  margin: 1rem auto;

  img {
    margin-right: ${({ direction }) => direction === "row_reverse" && "2.1rem"};

    width: auto;
    height: 100%;
    max-height: 15.75rem;
    @media (max-width: 26.5625rem) {
      max-height: 11.25rem;
    }
  }
  @media (max-width: 26.5625rem) {
    gap: 1.875rem;
    margin: 2rem auto;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ direction }) => direction === "row" && "1rem"};
  width: 100%;
  max-width: 25.25rem;

  h1 {
    font-family: Cabin;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.4375rem;
    letter-spacing: -0.0625rem;
    text-align: left;
    color: var(--blue-50);
  }

  p {
    margin: 0 0 1.25rem 0 !important;
    font-family: Raleway !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    line-height: 1.5rem !important;
    letter-spacing: 0.0125rem !important;
    text-align: left !important;

    color: var(--blue-40) !important;
  }
`;
