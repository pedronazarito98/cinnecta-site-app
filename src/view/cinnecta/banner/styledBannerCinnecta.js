import styled from "styled-components";
export const ContainerBannerCinnecta = styled.section`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;

  font-family: "Cabin", sans-serif;
`;

export const ContentBannerCinnecta = styled.div`
  width: 100%;
  max-width: 35.875rem;
  padding: 2rem 0.5rem;

  h1 {
    font-weight: 700;
    text-align: left;
    color: #002163;
    font-size: 3rem;
    line-height: 55px;
  }
  p {
    letter-spacing: 0.2px;
    line-height: 24px;
    margin-top: 1.5rem;
    color: #6d6d6d;
  }

  button {
    margin-top: 33px;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    max-width: 44rem;
  }
`;

export const WrapperCard = styled.div`
  gap: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-width: 370px;

  background-image: url("/src/assets/icons/frameContainer.svg");
  background-size: cover;
`;

export const CardLink = styled.a`
  width: 100%;
  max-width: 140px;
  height: 136px;

  background: #0055ff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 75px;
    text-align: center;
    letter-spacing: -1px;

    color: #ffffff;
  }

  p {
    font-family: "Cabin";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
  }

  transition: all 0.5s;
  &:hover {
    transform: scale(1.12);
  }
`;
