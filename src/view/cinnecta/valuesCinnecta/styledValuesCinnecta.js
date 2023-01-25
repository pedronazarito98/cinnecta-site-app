import styled from "styled-components";

export const ContainerValues = styled.section`
  width: 100%;
  max-width: 1167px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  margin: 45px auto;
  gap: 8px;
  padding: 16px;

`;

export const CardValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 28px;
  gap: 8px;

  width: 100%;
  max-width: 312px;
  height: 100%;
  max-height: 271px;

  background: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  flex: none;
  order: 2;
  flex-grow: 0;

  img {
    height: 85px;
    width: auto;
  }

  span {
    color: var(--blue-50);
    font-family: Cabin;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  p {
    color: var(--text);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }
`;
