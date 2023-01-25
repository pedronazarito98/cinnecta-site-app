import React from "react";
import { ContainerNewsAbout, WrapperImage } from "./styledNewsAbout";
import { Title } from "../../../components/Title/Title";

export const NewsAbout = ({ data }) => {
  return (
    <ContainerNewsAbout id="about">
      <Title label="Cinnecta na mídia" />

      <WrapperImage>
        {data?.map(({ id, linkArticle, imageNews }) => (
          <a
            key={id}
            href={linkArticle}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={imageNews?.url} alt={id} loading="eager" />
          </a>
        ))}
      </WrapperImage>
    </ContainerNewsAbout>
  );
};
