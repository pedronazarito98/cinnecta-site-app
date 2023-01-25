import React from "react";
import { CardValues, ContainerValues } from "./styledValuesCinnecta";

export const ValuesCinnecta = ({ data }) => {
  return (
    <ContainerValues>
      {data?.map(({ iconValues, titleValues, descriptionValues }) => {
        return (
          <CardValues key={titleValues}>
            <img src={iconValues.url} alt={titleValues} loading="eager" />
            <span>{titleValues}</span>
            <p>{descriptionValues}</p>
          </CardValues>
        );
      })}
    </ContainerValues>
  );
};
