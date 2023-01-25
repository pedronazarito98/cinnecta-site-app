import styled from "styled-components";

export const ContainerVideo = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 28.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5625rem;

  @media (max-width: 20rem) {
    max-width: 17.5rem;
    padding: 2.5rem 0;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 34.3125rem;
  margin-bottom: 0.5rem;

  iframe {
    width: 100%;
    max-width: 34.3125rem;
    height: 16rem;
  }
  @media (max-width: 48rem) {
    iframe {
      max-width: 33.875rem;
      height: 18.25rem;
    }
  }

  @media (max-width: 26.5625rem) {
    iframe {
      height: 13.0625rem;
    }
  }
  @media (max-width: 23.4375rem) {
    iframe {
      height: 11.125rem;
    }
  }

  @media (max-width: 20rem) {
    iframe {
      height: 9.9375rem;
    }
  }
`;
