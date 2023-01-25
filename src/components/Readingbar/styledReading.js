import styled from "styled-components";

export const Bar = styled.div`
  position: fixed;
  background-color: var(--background-card);
  height: 4.25rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  box-shadow: 0px 0px 1px 0px #0000000a;

  z-index: 9;

  @media (max-width: 760px) {
    height: 8.25rem;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  max-width: 71.875rem;

  span {
    color: #7f7f7f;
    margin-left: 4.1875rem;
    font-family: Cabin;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0em;
    text-align: left;
  }

  @media (max-width: 760px) {
    padding: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    span {
      margin-left: 1.1875rem;
    }

    > div {
      margin-left: 0;
    }
  }
`;

export const Line = styled.div`
  position: fixed;
  margin-top: 4.5rem;
  border-radius: 0px 2px 0px 0px;
  border-bottom: 6px solid #0055ff;
  background: red;
  @media (max-width: 760px) {
    margin-top: 8.5rem;
  }
`;
