import React from "react";
import { Title } from "../../../components/Title/Title";
import { FormCareers } from "../formCareers";
import {
  CardVacancies,
  ContainerVacancies,
  WrapperCards,
  WrapperVacancies,
} from "./StyledVacancies";

export const Vacancies = ({ data, noVacancy }) => {
  return (
    <ContainerVacancies id="vacancies">
      <Title label="Vagas abertas" />

      <WrapperVacancies>
        <WrapperCards>
          {data?.length > 0 ? (
            data?.map(({ area, jobTitle, descriptionJob }) => (
              <CardVacancies key={jobTitle}>
                <span>{area}</span>
                <h1>{jobTitle}</h1>
                <p>{descriptionJob}</p>
              </CardVacancies>
            ))
          ) : (
            <h2>{noVacancy}</h2>
          )}
        </WrapperCards>

        <FormCareers />
      </WrapperVacancies>
    </ContainerVacancies>
  );
};
