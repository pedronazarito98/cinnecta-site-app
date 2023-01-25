import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  gap: 24px;

  width: 100%;
  max-width: 574px;

  background: #ffffff;
  border-radius: 43px;

  button {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    max-width: 477px;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    max-width: 623px;
  }
`;

export const CapsuleField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: 478px;

  p {
    margin: 0 8px;
    color: red;
    font-weight: bold;
  }

  label {
    margin-left: 8px;

    color: var(--text);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  input {
    border-radius: 3px;
    background: #f5f5f5 !important;
    color: rgb(70, 70, 70);
    font-family: "Cabin", sans-serif;
    font-size: 15px;
    letter-spacing: normal;
    line-height: 1.3;
    border: 0px;
    margin: 0px;
    width: 95%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      background: #fff !important;
      border: 1px solid #0055ff;
    }

    &::placeholder {
      text-align: left;
      font-weight: 500;
      color: var(--placeholder);
    }
  }
`;
