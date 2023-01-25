import React from "react";
import { ContainerDescriptionContact } from "./styledDescriptionContact";

export const DescriptionContact = ({ data }) => {
  return (
    <ContainerDescriptionContact>
      <h1>{data?.titleDescription}</h1>
      <h3>{data?.bodyDescription}</h3>
      <img src={data?.imageContact?.url} alt="contato" loading="eager" />

      <h3>{data?.titleListSolutions}</h3>

      <ul>
        {data?.listSolution?.map(({ listItem, id }) => (
          <li key={id}>{listItem} </li>
        ))}
      </ul>
    </ContainerDescriptionContact>
  );
};
