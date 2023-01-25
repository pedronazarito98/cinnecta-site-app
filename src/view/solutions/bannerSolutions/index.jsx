import React from "react";
import { ContainerCard, StyledBannerSolutions } from "./styledBanner";
import { CardFeatures } from "./components/cardFeatures";
import { DescriptionBanner } from "./components/descriptionBanner";

export const BannerSolutions = ({ data, infoCard }) => {
  const { id, titleBanner, subTitleBanner, bodyBanner } = data;

  return (
    <StyledBannerSolutions id="cinnecta_ltv">
      <DescriptionBanner
        key={id}
        title={titleBanner}
        subTitle={subTitleBanner}
        paragraph={bodyBanner?.html}
        labelButton="solicite uma demo"
      />

      <img src={data?.imageBanner?.url} alt="imagem banner" loading="eager" />
      <ContainerCard>
        {infoCard?.map(({ id, titleInfo, bodyInfo }) => (
          <CardFeatures key={id} label={titleInfo} description={bodyInfo} />
        ))}
      </ContainerCard>
    </StyledBannerSolutions>
  );
};
