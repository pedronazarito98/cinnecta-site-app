import styled from "styled-components";

export const ContainerDeposition = styled.div`
  width: 100%;
  margin: 48px auto;
  background-color: #0055ff;
  height: 370px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    height: 470px;
  }
`;

export const ContainerContent = styled.div`
  width: 725px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor === "white" && "var(--white);"};
  border-radius: 20px;
  
  filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export const InfoDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 12.5px auto;

  span {
    color: var(--blue-50);
    font-size: 115px;
    position: absolute;
    transform: translate(-271px, -23px);
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
`;

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;

  margin: 24px auto 12px auto;

  span {
    color: var(--blue-40);
    font-weight: bold;
  }
`;
