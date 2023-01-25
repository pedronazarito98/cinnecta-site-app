import React from "react";
import {
  WrapperText,
  ContainerTimeline,
  WrapperTimerline,
} from "./styledTimeline";

export const Timeline = ({ data }) => {
  return (
    <ContainerTimeline id="timeline">
      {data?.map(
        ({
          descriptionTimeline,
          dateTimeline,
          directionTimeline,
          illustrationTimeline,
        }) => (
          <>
            <WrapperTimerline direction={directionTimeline} key={dateTimeline}>
              <WrapperText direction={directionTimeline}>
                <h1>{dateTimeline}</h1>
                <p>{descriptionTimeline}</p>
              </WrapperText>
              <img
                src={illustrationTimeline?.url}
                alt={illustrationTimeline?.fileName}
              />
            </WrapperTimerline>
          </>
        )
      )}
    </ContainerTimeline>
  );
};
