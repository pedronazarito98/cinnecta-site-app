import styled from "styled-components";

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h1 {
    font-size: 2.9375rem;
    font-weight: bold;
    color: var(--text);
    text-align: center;

    display: inline-block;
    width: 100%;
    max-width: 50rem;
  }

  @media (max-width: 48rem) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 26.5625rem) {
    padding: 0.625rem;

    h1 {
      font-size: 1.75rem;
      margin: 0.5rem;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3.375rem;

  h2 {
    color: var(--blue-40);
    font-family: Cabin;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4375rem;
    letter-spacing: -0.0625rem;
    text-align: center;
    margin-bottom: 0.9375rem;
  }

  p {
    color: var(--text);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0125rem;
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
  max-width: 58.125rem;
  background: var(--white);
  border-radius: 2.6875rem;

  margin: 2.125rem auto;
  padding: 1.25rem;

  @media (max-width: 26.5625rem) {
    align-items: flex-start;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.5938rem 1.5rem;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};
  margin: 0.5rem;

  @media (max-width: 52.625rem) {
    justify-content: center;
  }
`;

export const CapsuleField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  max-width: 22.1875rem;
  margin: 1.5rem;

  p {
    margin: 0 0.5rem;
    color: red;
  }

  label {
    margin-left: 0.3125rem;

    color: var(--text);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  input {
    border-radius: 0.1875rem;
    background: #f5f5f5 !important;
    color: rgb(70, 70, 70);
    font-family: "Cabin", sans-serif;
    font-size: 0.9375rem;
    letter-spacing: normal;
    line-height: 1.3;
    border: 0px;
    margin: 0px;
    width: 95%;
    height: auto;
    padding: 0.625rem;
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

  @media (max-width: 48rem) {
    margin: 1.5rem 0;
  }
`;

export const FooterForm = styled.footer`
  width: 100%;
  max-width: 47.375rem;
  label {
    font-weight: 500;
    color: var(--text);
  }
  span {
    font-size: 0.875rem;
    margin: 0.25rem 1rem;
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

  @media (max-width: 48rem) {
    max-width: 43.5625rem;
  }

  @media (max-width: 26.5625rem) {
    margin: 1rem 0.75rem;
    span {
      margin: 0.25rem 0.25rem;
    }
  }
`;
