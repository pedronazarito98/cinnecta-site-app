import React from "react";
import { Title } from "../../../components/Title/Title";
import {
  CardStamps,
  ContainerStampsCareers,
  WrapperStamps,
} from "./StyledStampsCareers";

import { StampsRank } from "../../Home/stamps/components/stampsRank/StampsRank";

export function StampsCareers({ data }) {
  return (
    <ContainerStampsCareers>
      <Title label="Somos Great Place to Work" />

      <WrapperStamps>
        {data?.map(({ descriptionStamp, imageStamp, rankStamps }) => (
          <CardStamps key={rankStamps}>
            <img src={imageStamp?.url} alt={rankStamps} loading="eager" />
            <StampsRank
              fontType="primary"
              rank={rankStamps}
              description={descriptionStamp}
            />
          </CardStamps>
        ))}
      </WrapperStamps>
    </ContainerStampsCareers>
  );
}
