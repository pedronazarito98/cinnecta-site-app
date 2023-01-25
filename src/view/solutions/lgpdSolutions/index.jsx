import React from "react";
import { ContainerLgpdSolutions } from "./styledLgpdSolutions";
import { InfoCard } from "../../../components/InfoCard/InfoCard";

export const LgpdSolutions = ({ data }) => {
  const { id, imageProduct, nameProduct, descriptionProduct } = data;
  return (
    <ContainerLgpdSolutions>
      <InfoCard
        key={id}
        redirect={true}
        image={imageProduct?.url}
        subTitle={nameProduct}
        description={descriptionProduct}
      />
    </ContainerLgpdSolutions>
  );
};
