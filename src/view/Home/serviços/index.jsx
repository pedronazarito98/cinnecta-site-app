import React from "react";
import { SectionCard } from "./styledServices";
import { CardHome } from "../../../components/CardHome";

export function ServicesView({ data }) {
  return (
    <SectionCard>
      {data?.map(({ imageInfo, titleInfo, bodyInfo }) => (
        <CardHome
          key={titleInfo}
          icon={imageInfo.url}
          title={titleInfo}
          description={bodyInfo}
        />
      ))}
    </SectionCard>
  );
}
