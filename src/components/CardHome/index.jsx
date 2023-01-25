import React from "react";

import { ContainerCard, ContentCard } from "./styledCard";

export const CardHome = ({ icon, title, description }) => {
  return (
    <ContainerCard>
      <img src={icon} alt={title} loading="eager" />
      <ContentCard>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContentCard>
    </ContainerCard>
  );
};
