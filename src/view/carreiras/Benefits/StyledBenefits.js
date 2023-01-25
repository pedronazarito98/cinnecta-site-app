import styled from "styled-components";

export const ContainerBenefits = styled.section`
  width: 100%;

  background-color: var(--background-gray);

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;

  margin: 2.813rem auto;
  gap: 0.5rem;
  padding: 2rem 0;
`;

export const WrapperCardValue = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 31px 0 ;
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 31px;
`;

export const CardValues = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1.75rem;
  gap: 1rem;

  width: 100%;
  height: 100%;
  min-height: 91px;
  max-width: 365px;

  background: var(--background-card);
  border-radius: 10px;

  img {
    height: 2.375rem;
    width: auto;
  }

  span {
    color: #333333;
    font-family: Cabin;
    font-size: 1rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.016rem;
    text-align: left;
  }
  p {
    color: #6d6d6d;
    margin-top: 8px;
  }
`;

export const ContentValues = styled.div`
  display: flex;
  flex-direction: column;
`;
