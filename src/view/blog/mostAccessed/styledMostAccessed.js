import styled from "styled-components";

export const ListMostAccessed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.4rem;

  p {
    color: #4785ff;
    font-family: Cabin;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.25px;
    text-align: center;
    padding-right: 1rem;
  }

  a {
    text-decoration: none;
    font-family: Cabin;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #7f7f7f;

    transition: 0.2s color;

    &:hover {
      color: #4785ff;
      font-weight: bold;
    }
  }
`;
