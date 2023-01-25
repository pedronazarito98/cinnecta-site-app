import styled from "styled-components";

export const StyledCardTechnologies = styled.div`
  height: 282px;
  width: 100%;
  max-width: 492px;
  border-radius: 25px;
  padding: 30px 57px;
  box-shadow: 1px 0px 4px 0px #00000040;

  margin: 35px 17px;

  h1 {
    color: var(--blue-50);
    font-family: Cabin;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  p {
    margin: 16px 0 0 0;
    color: var(--text);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  @media (max-width: 1024px) {
    max-width: 472px;
  }
  @media (max-width: 768px) {
    height: 284px;
  }

  @media (max-width: 446px) {
    padding: 20px 30px;
  }

  @media (max-width: 360px) {
    padding: 20px 30px;
    height: 330px;
  }

  @media (max-width: 375px) {
    padding: 20px 30px;
    height: 340px;
  }

  @media (max-width: 320px) {
    padding: 20px 30px;
    height: 366px;
  }
`;
