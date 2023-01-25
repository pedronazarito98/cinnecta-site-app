import styled from "styled-components";

export const ContainerDeposition = styled.div`
  width: 100%;
  /* max-width: 78rem; */
  margin: 0 auto;
  height: 380px;
  background-color: var(--blue-40);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 425px) {
    height: 470px;
  }
`;

export const ImageCompanie = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContainerContent = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor === "white" && "var(--white);"};

  @media (max-width: 425px) {
    padding: 16px;
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
    color: white;
    margin: 16px 0 0 8px;

    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
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

export const FooterCard = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 32px 26px;

  color: white;

  span {
    color: white;
    font-weight: bold;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  p {
    font-size: 18px;
    color: ${({ colorText }) => colorText === "blue" && "var(--blue-50);"};
  }
  span {
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    color: ${({ colorText }) => colorText === "blue" && "var(--blue-50)!important;"};
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
