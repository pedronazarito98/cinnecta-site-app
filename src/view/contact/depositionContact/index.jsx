import React from "react";
import { DepositionCard } from "./components/DepositionCard";
import { ContainerDepositionSolutions } from "../../solutions/depositionsSolutions/styledDepoimentsSolutions";

export const DepositionsContact = ({ data }) => {
  const {
    id,
    bodyDeposition,
    nameAgent,
    logoCompany,
    imageAgent,
    officeAgent,
  } = data;

  return (
    <ContainerDepositionSolutions>
      <DepositionCard
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
