import styled from "styled-components";

export const WrapperRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.625rem 0 1.25rem 0;
  width: 100%;
  max-width: 500px;

  h1 {
    color: var(--blue-50);
    margin-right: 1.5rem;
    margin-bottom: 0.375rem;
    font-size: 2.375rem;
    width: 2.5rem;
  }
  p {
    color: var(--blue-40);
    text-align: left;
    font: ${({ fontType }) =>
      fontType === "primary" ? '700 0.875rem "Cabin"' : '700 1.25rem "Cabin"'};
    width: 24.125rem;
    line-height: ${({ fontType }) =>
      fontType === "primary" ? "1.5rem" : "2rem"};
  }
`;
