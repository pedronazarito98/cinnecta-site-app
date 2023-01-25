import { Link } from "gatsby";
import React from "react";
import { Button } from "../../../components/Button/Button";
import { Title } from "../../../components/Title/Title";
import { CardTechnologies } from "./components/cardTechnologies";
import {
  ContainerCardTechnologies,
  StyledTechnologiesSolutions,
} from "./styledTechnologiesSolutions";

export const TechnologiesSolutions = ({ data }) => {
  const objectData = data === undefined ? [] : data;
  return (
    <StyledTechnologiesSolutions>
      <Title label="Nossas Tecnologias" />
      <ContainerCardTechnologies>
        {objectData?.map(({ id, titleInfo, bodyInfo }) => (
          <CardTechnologies key={id} title={titleInfo} description={bodyInfo} />
        ))}
      </ContainerCardTechnologies>
      <Link to="/contato">
        <Button variant="primary" label="fale com um especialista" />
      </Link>
    </StyledTechnologiesSolutions>
  );
};
