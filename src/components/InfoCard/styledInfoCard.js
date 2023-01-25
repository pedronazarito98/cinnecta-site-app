import styled from "styled-components";

export const ContainerInfoCard = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 105px 0 50px 0;
  padding: 20px;
  font-family: "Cabin", sans-serif;

  display: flex;
  flex-flow: ${({ reverseCard }) =>
    reverseCard ? "row wrap-reverse" : "row wrap"};
  align-items: flex-start;
  justify-content: space-around;

  flex-direction: ${({ reverseCard }) => reverseCard && "row-reverse"};

  img {
    height: 300px;
    width: auto;
  }

  button {
    margin-top: 1.25rem;
  }

  &:nth-child(3) {
    margin: 30px 0 100px 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin: 24px 0 50px 0;
    img {
      height: 250px;
    }
  }

  @media (max-width: 390px) {
    img {
      height: 190px;
    }
  }

  @media (max-width: 320px) {
    img {
      height: 14rem;
    }
  }
`;

export const ContentInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  margin-top: 16px;

  h1 {
    color: #0055ff;
    margin: 0;
  }

  h2 {
    margin: 8px 0;
    color: #002163;
    font-size: 25px;
    line-height: 32px;
  }
  p {
    margin: 0;
    color: #6d6d6d;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 425px) {
    padding: 24px;
  }
`;
