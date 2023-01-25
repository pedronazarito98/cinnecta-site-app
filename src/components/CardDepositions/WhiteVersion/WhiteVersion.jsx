import React from "react";
import {
  IconImage,
  WrapperText,
} from "../StyledCardDepositions";
import { ContainerContent, ContainerDeposition, HeaderCard, InfoDescription } from "./StyledWhiteVersion";

export function CardDepositionWhite({
  depoiment,
  imgDepositions,
  name,
  office,
}) {
  return (
    <ContainerDeposition>
      <ContainerContent bgColor="white">
        <HeaderCard>
          <IconImage>
            <img src={imgDepositions} alt="imgDeposition" loading="lazy" />
          </IconImage>
          <WrapperText colorText="blue">
            <p>{name}</p>
            <span> {office} </span>
          </WrapperText>
        </HeaderCard>

        <InfoDescription>
          <span>“</span>
          <p>{depoiment}</p>
        </InfoDescription>
      </ContainerContent>
    </ContainerDeposition>
  );
}
