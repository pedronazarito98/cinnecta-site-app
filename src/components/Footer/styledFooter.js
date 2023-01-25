import { Link } from "gatsby";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  background-color: var(--blue-50);
  @media (max-width: 425px) {
    max-height: 100%;
    padding: 20px;
  }
`;

export const ContainerLink = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 62px auto;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const WrapperAuxiliaryLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;

export const TitleLink = styled.span`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  color: var(--white);

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const AuxiliaryLink = styled(Link)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;

  color: var(--white);
`;

export const WrapperColumn = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const ColumnNetwork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
  height: 200px;

  img {
    height: 39px;
    width: auto;
  }

  > a {
    font-family: "Cabin", sans-serif;
    color: #fff;
    font-size: 14px;
    margin-left: 8px;
  }
`;

export const ColumnCompanies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 300px;
  height: 152px;
  margin-left: 24px;

  color: #fff;

  img {
    height: 41px;
    width: auto;
    margin-bottom: 12px;
  }

  h3 {
    font-weight: 500;
    line-height: 24px;
    font-size: 14px;
  }

  span {
    font-weight: 500;
    line-height: 24px;
    font-size: 14px;
  }
`;

export const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  width: 32px;
  height: 32px;
  border-radius: 9px;

  cursor: pointer;

  transition: all 0.5s;
  svg {
    font-size: 17px;
    color: var(--blue-50);
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 170px;
`;
