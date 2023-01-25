import React from "react";
import {
  ContainerContent,
  ContainerDeposition,
  FooterCard,
  IconImage,
  ImageCompanie,
  InfoDescription,
  WrapperText,
} from "./StyledCardDepositions";

export function CardDepositions({
  depoiment,
  imgDepositions,
  name,
  office,
  company,
}) {
  return (
    <ContainerDeposition>
      <ImageCompanie src={company} alt={name} loading="eager" />

      <ContainerContent>
        <InfoDescription>
          <span>“</span>
          <p>{depoiment}</p>
        </InfoDescription>
        <FooterCard>
          <IconImage>
            <img src={imgDepositions} alt="imgDeposition" loading="eager" />
          </IconImage>
          <WrapperText>
            <img src={company} alt={name} loading="eager" />
            <p>{name}</p>
            <span> {office} </span>
          </WrapperText>
        </FooterCard>
      </ContainerContent>
    </ContainerDeposition>
  );
}
