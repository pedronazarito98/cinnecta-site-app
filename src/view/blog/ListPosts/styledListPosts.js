import styled from "styled-components";

export const InputSearch = styled.input`
  width: 100%;
  padding: 0.75rem;
  max-width: 38.75rem;
  border: 0;
  border-radius: 0.1875rem;
  margin-top: 2.5rem;
  border: 1px solid #0055ff;

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
`;
