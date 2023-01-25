import React from "react";
import { Link } from "gatsby";
import { Button } from "../../../components/Button/Button";
import { ContainerBanner, ContentBanner } from "./styledBanner";

export function Banner({ data }) {
  const { titleBanner, subTitleBanner, imageBanner } = data;

  return (
    <ContainerBanner>
      <ContentBanner>
        <h1>{titleBanner}</h1>
        <p>{subTitleBanner}</p>
        <Link to="/contato">
          <Button variant="primary" label="fale com um especialista" />
        </Link>
      </ContentBanner>

      <img src={imageBanner?.url} alt={imageBanner?.fileName} loading="eager" />
    </ContainerBanner>
  );
}
