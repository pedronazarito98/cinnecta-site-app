import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 54px;

  h2 {
    color: var(--blue-40);
    font-family: Cabin;
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    color: var(--text);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: center;
  }
`;

export const FormularioWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 930px;
  background: var(--white);
  border-radius: 43px;

  margin: 34px auto;
  padding: 1.25rem;

  button {
    margin-top: 24px;
    padding: 9.5px 24px;
  }

  @media (max-width: 768px) {
    max-width: 568px;
    button {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    align-items: flex-start;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};
  margin: 8px;
`;

export const CapsuleField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  max-width: 355px;
  margin: 24px;

  p {
    margin: 0 8px;
    color: red;
  }

  label {
    margin-left: 5px;

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

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;

export const FooterForm = styled.footer`
  width: 100%;
  max-width: 758px;

  label {
    font-weight: 500;
    font-size: 11px;
    color: var(--text);
  }
  span {
    font-size: 11px;
    margin: 4px 16px;
    display: inline-block;
    color: var(--text);
  }
  a {
    color: var(--text);
    &:hover {
      text-decoration: underline !important;
    }
  }
  p {
    color: red;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 358px;
    span {
      margin: 0;
    }
  }

  @media (max-width: 425px) {
    margin: 0 auto;
    max-width: 323px;
    span {
      margin: 4px 4px;
    }
  }
`;

export const WrapperButton = styled.div`
  width: 100%;
  max-width: 759px;

  @media (max-width: 768px) {
    max-width: 358px;
  }
`;
