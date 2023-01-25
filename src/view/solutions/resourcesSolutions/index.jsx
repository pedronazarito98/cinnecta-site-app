import React from "react";
import { ContentSolutions } from "./components/contentSolutions";
import { ContainerResources } from "./styledResourcesSolutions";
import imgInsights from "../../../assets/images/Insights.svg";

export const ResourcesSolutions = ({ data }) => {
  return (
    <ContainerResources>
      <ContentSolutions exclusiveFeature={data} />
      <img src={imgInsights} alt="insights" loading="eager" />
    </ContainerResources>
  );
};
