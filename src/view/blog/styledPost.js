import styled from "styled-components";

export const ContainerPost = styled.main`
  width: 100%;
  max-width: 53rem;
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    color: var(--blue-50);
    font-family: Cabin;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.4375rem;
    letter-spacing: -0.0625rem;
    text-align: left;
    padding: 0.5rem;
  }
`;

export const MetaPost = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* max-width: 400px; */
  margin: 35px 0;

  span {
    display: flex;
    align-items: center;
    color: var(--text);
    margin: 0.5rem 0.75rem;

    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.20000000298023224px;
    text-align: left;

    svg {
      margin-right: 0.5rem;
      font-size: 1.75rem;
    }
  }
`;

export const LineSeparator = styled.hr`
  width: 100%;
  max-width: 52.6875rem;
  height: 0.125rem;
  background: var(--gray-30);
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const ContentPost = styled.div`
  h1 {
    color: var(--blue-50);

    font-family: Cabin;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.4375rem;
    letter-spacing: -0.0625rem;
    text-align: left;
    padding: 1rem;
  }

  h2 {
    font-family: Cabin;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4375rem;
    letter-spacing: -1px;
    text-align: left;
    color: var(--blue-40);
    padding: 1rem;
  }

  h3 {
    color: var(--blue-40);
    padding: 1rem;
    font-family: Cabin;
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0px;
    text-align: left;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    color: #555555;
    padding: 1rem;
    font-family: Raleway;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0px;
    text-align: left;
  }

  ul {
    background-color: #d6e4ff;
    border-radius: 20px;
    padding: 24px 56px 24px 56px;

    li {
      color: #0055ff;
      font-family: Raleway;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.625rem;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  pre {
    margin-left: 1rem;
  }

  table,
  td,
  th {
    border: 1px solid var(--gray-30);
  }
  table {
    border-collapse: collapse;
    td {
      height: 50px;
      vertical-align: top;
    }
  }

  iframe {
    width: 49rem;
    height: 25.3125rem;
  }
`;

export const FooterMostContent = styled.footer`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 24px; */

  padding: 1rem;
  margin: 0 auto;
  background: #ebf1ff;

  p {
    font-family: Cabin;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0.25px;
    text-align: left;
    color: var(--blue-50);
    margin: 1.5rem 0.5rem;
  }
`;

export const ListMoreContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

//! Estilização Home blog

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1176px;

  margin: 64px auto;

  h1 {
    font-family: Cabin;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.4375rem;
    letter-spacing: -0.0625rem;
    text-align: center;
    color: var(--blue-40);
    padding: 1rem;
  }
  h2 {
    color: var(--text);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.20000000298023224px;
    text-align: center;
    padding: 0.5rem;
  }
`;
