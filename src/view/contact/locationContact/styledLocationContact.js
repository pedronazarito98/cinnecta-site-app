import styled from "styled-components";

export const ContainerLocation = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 48px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: var(--blue-40);
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    margin-bottom: 16px;
  }

  ul {
    li {
      color: var(--text);
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 425px) {
    padding: 50px;
  }
`;
