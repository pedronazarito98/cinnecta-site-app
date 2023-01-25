import React from "react";
import { StyledCardFeatures } from "./styledCardFeatures";

export function CardFeatures({ label, description }) {
  return (
    <StyledCardFeatures>
      <h2>{label} </h2>
      <p>{description}</p>
    </StyledCardFeatures>
  );
}
