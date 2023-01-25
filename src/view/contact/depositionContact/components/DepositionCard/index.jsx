import React from "react";
import {
  ContainerContent,
  ContainerDeposition,
  FooterCard,
  IconImage,
  ImageCompanie,
  InfoDescription,
  WrapperText,
} from "./styledDepositionCard";

export function DepositionCard({
  depoiment,
  imgDepositions,
  name,
  office,
  company,
}) {
  return (
    <ContainerDeposition>
      <ImageCompanie>
        <img src={company} alt={name} loading="eager" />
      </ImageCompanie>

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
