import React from "react";
import { ContainerDepositionSolutions } from "./styledDepoimentsSolutions";
import { CardDepositions } from "../../../components/CardDepositions/CardDepositions";

export const DepositionsSolutions = ({ data }) => {
  const {
    id,
    bodyDeposition,
    nameAgent,
    logoCompany,
    officeAgent,
    imageAgent,
  } = data;

  return (
    <ContainerDepositionSolutions>
      <CardDepositions
        key={id}
        depoiment={bodyDeposition}
        name={nameAgent}
        company={logoCompany?.url}
        imgDepositions={imageAgent?.url}
        office={officeAgent}
      />
    </ContainerDepositionSolutions>
  );
};
