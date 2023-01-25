import React from "react";
import { StyledDescriptionSolutions } from "./styledDescriptionSolutions";
import { DescriptionBanner } from "../bannerSolutions/components/descriptionBanner";

export const DescriptionSolutions = ({ data }) => {
  return (
    <StyledDescriptionSolutions id="cinnecta_ciass">
      {data?.map(({ imageProduct }) => (
        <img
          key={imageProduct?.url}
          src={imageProduct?.url}
          alt="imagem banner"
          loading="eager"
        />
      ))}

      {data?.map(
        ({ id, nameProduct, bodyProduct, descriptionProduct, labelButton }) => (
          <DescriptionBanner
            key={id}
            title={nameProduct}
            subTitle={descriptionProduct}
            paragraph={bodyProduct.html}
            labelButton={labelButton}
          />
        )
      )}
    </StyledDescriptionSolutions>
  );
};
