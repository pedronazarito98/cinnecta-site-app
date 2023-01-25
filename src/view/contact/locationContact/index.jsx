import React from "react";
import { ContainerLocation } from "./styledLocationContact";

export const LocationContact = ({ data }) => {
  return (
    <ContainerLocation>
      <h3>Nossos endereços</h3>
      <ul>
        {data?.map(({ ourAddress }) => (
          <li key={ourAddress}>{ourAddress}</li>
        ))}
      </ul>
    </ContainerLocation>
  );
};
