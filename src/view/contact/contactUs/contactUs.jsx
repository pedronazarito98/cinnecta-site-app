import React from "react";
import { ContainerContato } from "./styledDescriptionContact";
import { DescriptionContact } from "./components/DescriptionContact";
import { FormContact } from "./components/formContact";

export function ContactUs({ descriptionData }) {
  return (
    <ContainerContato id="fale_com_especialista">
      <DescriptionContact data={descriptionData} />
      <FormContact />
    </ContainerContato>
  );
}
