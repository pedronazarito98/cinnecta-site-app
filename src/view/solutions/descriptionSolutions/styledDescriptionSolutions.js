import styled from "styled-components";

export const StyledDescriptionSolutions = styled.section`
  width: 100%;
  max-width: 76.25rem;
  padding: 1.25rem;
  margin: 64px auto;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-around;

  font-family: "Cabin", sans-serif;

  img {
    height: 480px;
    width: auto;
    margin-top: 1.875rem;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap-reverse;
    img {
      margin-top: 4rem;
      height: 22.813rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      margin-top: 4rem;
      height: 23rem;
    }
  }

  @media (max-width: 425px) {
    padding: 20px;
    img {
      height: 19rem;
    }
  }
`;
