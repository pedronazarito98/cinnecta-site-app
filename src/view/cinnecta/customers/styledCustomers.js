import styled from "styled-components";

export const ContainerCustomers = styled.section`
  width: 100%;
  margin: 2.5rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--blue-50);
`;

export const WrapperContent = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 2rem;

  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ContentDescription = styled.div`
  width: 100%;
  max-width: 32.125rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4375rem;
    letter-spacing: -0.0625rem;
    text-align: left;
    color: white;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: white;

    strong {
      font-weight: 700;
    }
  }
`;

export const WrapperLogos = styled.div`
  width: 100%;
  max-width: 24.375rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 0.5rem;

  width: 10.7075rem;
  height: 5.5619rem;

  img {
    height: 3.5619rem;
    width: auto;
  }
`;
