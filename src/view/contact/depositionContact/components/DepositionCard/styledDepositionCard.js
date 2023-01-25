import styled from "styled-components";

export const ContainerDeposition = styled.div`
  width: 100%;
  max-width: 1222px;
  margin: 0 auto;
  height: 342px;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageCompanie = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 342px;
  border-radius: 20px 0 0 20px;

  background-color: var(--blue-40);
  img {
    height: 86px;
    width: auto;
  }

  @media (max-width: 425px) {
    display: none;
    img {
      display: none;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 600px;
  height: 342px;
  background: #ebf1ff;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 29px;

  @media (max-width: 425px) {
    border-radius: 20px;
    padding: 24px;
    height: 400px;
  }
  @media (max-width: 350px) {
    height: 424px;
  }
`;

export const InfoDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  span {
    color: var(--blue-50);
    font-size: 52px;
  }

  p {
    color: var(--blue-50);
    margin: 16px 0 0 8px;

    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media (max-width: 320px) {
    p {
      font-size: 16px;
    }
  }
`;

export const IconImage = styled.div`
  border: 4px solid var(--blue-200);
  border-radius: 50%;
  width: 81px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 32px 26px;

  color: var(--blue-50);

  span {
    color: var(--blue-40);
    font-weight: bold;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  p {
    font-size: 18px;
  }
  span {
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }

  img {
    display: none;
    width: 100px;
    margin-bottom: 8px;
    margin-left: -8px;
  }

  @media (max-width: 425px) {
    img {
      display: inline;
    }
  }
`;
