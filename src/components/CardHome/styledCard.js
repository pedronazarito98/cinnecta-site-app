import styled from "styled-components";
import "@fontsource/cabin";

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 320px;

  flex: 1;
  padding: 8px;
  display: flex;
  align-items: flex-start;

  img {
    width: auto;
    height: 63px;
    margin: 9px 23px 0 0;
  }
`;

export const ContentCard = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 230px;

  h1 {
    color: var(--blue-40);
    font-size: 25px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.20px;
    text-align: left;

    margin-top: 10px;
    color: var(--text);
  }
`;
