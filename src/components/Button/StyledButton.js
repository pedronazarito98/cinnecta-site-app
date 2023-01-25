import styled from 'styled-components';


export const StyledButton = styled.button`
  color: #fff;
  width: auto;
  border: 0;
  font-size: 16px;
  overflow: hidden;
  padding: 9.5px 24px;
  border-radius: 0.25rem;
  background: ${({ variant }) =>
    (variant === "primary" && `var(--blue-50)`) ||
    (variant === "secondary" && `var(--blue-40)`)};

  transition: all 0.25s;
  &:hover {
    background: ${({ variant }) =>
      (variant === "primary" && `var(--blue-40)`) ||
      (variant === "secondary" && `var(--blue-50)`)};
  }
`;