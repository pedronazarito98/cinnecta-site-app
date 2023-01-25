import React from "react";
import { Title } from "../../../components/Title/Title";
import { ContainerLocation } from "./styledLocationCinnecta";

export const LocationCinnecta = ({ data }) => {
  const { titleLocation, descriptionLocation, imageLocation } = data;

  return (
    <ContainerLocation>
      <Title label={titleLocation} />
      <span>{descriptionLocation}</span>

      <img src={imageLocation?.url} alt="Localidade" loading="eager" />
    </ContainerLocation>
  );
};
