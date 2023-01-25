import React from "react";
import { StyledCardTechnologies } from "./styledCardTechnologies";

export function CardTechnologies({ title, description }) {
  return (
    <StyledCardTechnologies>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledCardTechnologies>
  );
}
