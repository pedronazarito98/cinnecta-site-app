import React from "react";
import { Title } from "../../../components/Title/Title";
import { StampsRank } from "./components/stampsRank/StampsRank";
import {
  ContainerContent,
  ContainerStamps,
  WrapperStamps,
} from "./styledStamps";

export const StampsView = ({ data }) => {
  return (
    <ContainerStamps id="stamps">
      <Title label="Selos" />
      <ContainerContent>
        <WrapperStamps>
          {data[1]?.map(({ id, descriptionStamp, positionStamp }) => (
            <StampsRank
              key={id}
              rank={positionStamp}
              description={descriptionStamp}
            />
          ))}
        </WrapperStamps>

        <img src={data[0]?.url} alt="selos GPTW" loading="eager" />
      </ContainerContent>
    </ContainerStamps>
  );
};
