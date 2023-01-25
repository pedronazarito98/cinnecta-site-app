import React from "react";
import {
  CardValues,
  ContainerBenefits,
  ContentValues,
  WrapperCardValue,
} from "./StyledBenefits";
import { Title } from "../../../components/Title/Title";
import iconCheck from "../../../assets/icons/CheckCircle.svg";

export const Benefits = ({ benefitsCinnecta, benefitsContCinnecta }) => {
  const benefitsData = [].concat(benefitsCinnecta, benefitsContCinnecta);

  return (
    <ContainerBenefits>
      <Title label="Benefícios Cinnecta" />
      <WrapperCardValue>
        {benefitsData?.map(({ titleValues, descriptionValues }) => (
          <CardValues key={titleValues}>
            <img src={iconCheck} alt="icon check" loading="eager" />
            <ContentValues>
              <span key={titleValues}>{titleValues}</span>
              {descriptionValues && <p>{descriptionValues}</p>}
            </ContentValues>
          </CardValues>
        ))}
      </WrapperCardValue>
    </ContainerBenefits>
  );
};
