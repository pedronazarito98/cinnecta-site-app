import styled from "styled-components";

export const WrapperList = styled.div`
  width: 100%;
  max-width: 337px;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.0399999991),
    0 0.2rem 0.6rem rgba(0, 0, 0, 0.0399999991),
    0 1.6rem 2.4rem rgba(0, 0, 0, 0.0599999987);

  margin: 0.4rem;
  padding: 1rem;
  height: ${({ noExcerpt }) => (noExcerpt ? null : "28.125rem")};
  width: 100%;
  max-width: 21.125rem;
  background: #fff;
  border-radius: 1.25rem;
  border: 1px solid var(--blue-50);

  img {
    width: 100%;
    height: auto;
    border-radius: 1.25rem;
  }

  @media (max-width: 1024px) {
    max-width: 20.125rem;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;

  a {
    font-weight: 700;
    text-align: left;
    font-family: Cabin;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: var(--blue-80);
    letter-spacing: 0.0156rem;
    transition: color 0.2s;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; //? Define quantas linhas
    -webkit-box-orient: vertical;
    &:hover {
      color: var(--blue-50);
    }
  }

  p {
    font-family: Raleway;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.2px;
    text-align: left;
    color: #6d6d6d;
    padding-top: 1rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //? Define quantas linhas
    -webkit-box-orient: vertical;
  }
`;

export const MetaPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 18.375rem;
  margin: 0 auto;
  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    display: block;
    color: #7f7f7f;
    padding-top: 1rem;
    font-family: Cabin;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
  }
`;
