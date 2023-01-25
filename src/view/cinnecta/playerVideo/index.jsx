import React from "react";
import { ContainerVideo, ContentContainer } from "./styledPlayerVideo";

export function PlayerVideo() {
  const url = "https://www.youtube.com/embed/P6_G5ceoOnQ";
  return (
    <ContainerVideo id="player_video">
      <ContentContainer>
        <iframe
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </ContentContainer>
    </ContainerVideo>
  );
}
