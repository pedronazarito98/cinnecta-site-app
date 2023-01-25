import styled from "styled-components";

export const ContainerDescriptionContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  max-width: 500px;

  img {
    height: 200px;
    width: auto;
    margin-bottom: 24px;
  }

  h1 {
    color: var(--blue-50);
    font-size: 48px;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -1px;
    text-align: left;
  }

  h3 {
    color: var(--blue-40);
    font-size: 25px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  }
  ul {
    margin-left: 24px;
    li {
      color: var(--text);
      font-family: Raleway;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
    }
  }

  @media (max-width: 1024px) {
    max-width: 340px;
  }
  @media (max-width: 768px) {
    max-width: 623px;
  }

  @media (max-width: 375px) {
    img {
      height: 11rem;
    }
  }
`;
