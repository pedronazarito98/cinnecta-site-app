import React from "react";
import {
  ContentBannerCinnecta,
  ContainerBannerCinnecta,
} from "./styledBannerCinnecta";
import { PlayerVideo } from "../playerVideo";
import { FormCinnecta } from "../formCinnecta";

export const BannerCinnecta = ({ data }) => {
  return (
    <ContainerBannerCinnecta id="sobre_nos">
      <ContentBannerCinnecta>
        <h1>{data?.titleBanner}</h1>
        <p>{data?.subTitleBanner}</p>
        <FormCinnecta />
      </ContentBannerCinnecta>

      <PlayerVideo />
    </ContainerBannerCinnecta>
  );
};
