import React from "react";
import { Button } from "../../../components/Button/Button";
import { ContainerBanner, ContentBanner } from "./styledBanner";

export const BannerCarreiras = ({ data }) => {
  return (
    <ContainerBanner>
      <ContentBanner>
        <h1>{data?.titleBanner}</h1>
        <p>{data?.subTitleBanner}</p>
        <a href="#vacancies">
          <Button variant="primary" label="confira nossas vagas" />
        </a>
      </ContentBanner>

      <img src={data?.imageBanner?.url} alt="carreiras" loading="eager" />
    </ContainerBanner>
  );
};
