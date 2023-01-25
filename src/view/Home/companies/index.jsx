import React from "react";
import { Title } from "../../../components/Title/Title";
import { ContainerCompanies, WrapperImages } from "./styledCompanies";
import BB from "../../../assets/imagesCompanies/BB_Seguros.svg";
import Bradesco from "../../../assets/imagesCompanies/Bradesco.png";
import Digio from "../../../assets/imagesCompanies/Digio.svg";
import Hapvida from "../../../assets/imagesCompanies/Hapvida.png";
import Inter from "../../../assets/imagesCompanies/Inter.svg";
import Localiza from "../../../assets/imagesCompanies/Localiza.png";
import Mondelez from "../../../assets/imagesCompanies/Mondelez.svg";
import Natura from "../../../assets/imagesCompanies/Natura.png";
import Smiles from "../../../assets/imagesCompanies/Smiles.png";
import Vivo from "../../../assets/imagesCompanies/Vivo.svg";

export const CompaniesView = () => {
  const CompaniesImages = [
    {
      image: Bradesco,
      id: "Bradesco",
    },
    {
      id: "Smiles",
      image: Smiles,
    },
    {
      id: "Vivo",
      image: Vivo,
    },
    {
      id: "Natura",
      image: Natura,
    },
    {
      id: "Mondelez",
      image: Mondelez,
    },
    {
      id: "Localiza",
      image: Localiza,
    },
    {
      id: "BB",
      image: BB,
    },
    {
      id: "Digio",
      image: Digio,
    },
    {
      id: "Inter",
      image: Inter,
    },
    {
      id: "Hapvida",
      image: Hapvida,
    },
  ];

  return (
    <ContainerCompanies>
      <Title label="Empresas líderes de mercado que confiam na Cinnecta" />
      <WrapperImages>
        {CompaniesImages.map(({ image, id }) => (
          <img key={id} src={image} alt={id} loading="eager" />
        ))}
      </WrapperImages>
    </ContainerCompanies>
  );
};
