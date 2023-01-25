import styled from "styled-components";

export const ContainerPost = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 10px;
`;

export const Submenu = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.625rem;
  width: 100%;

  svg {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const WrapperPosts = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 73.5rem;
  gap: 4rem;
`;

export const ContainerCard = styled.section`
  width: 100%;
  max-width: 75rem;

  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonMenu = styled.button`
  color: ${({ select }) => (select ? "var(--white)" : "var(--blue-50)")};
  width: auto;
  background-color: ${({ select }) =>
    select ? "var(--blue-50)" : "transparent"};
  border: 0;
  font-size: 1rem;
  overflow: hidden;
  padding: 9.5px 0.75rem;
  border-radius: 0.25rem;

  transition: 0.2s background-color linear;

  &:hover {
    border: 1px solid var(--blue-50);
  }
`;

export const CardMostAccessed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 21.125rem;
  hr {
    position: relative;
    border: none;
    height: 1px;
    background: #aaaaaa;

    &:nth-child(11) {
      display: none;
    }
  }
  p {
    color: var(--blue-50);
    font-family: Cabin;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0.25px;
    text-align: left;
  }
`;
