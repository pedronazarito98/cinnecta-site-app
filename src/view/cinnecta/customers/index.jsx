import React from "react";
import {
  LogoCard,
  WrapperLogos,
  WrapperContent,
  ContainerCustomers,
  ContentDescription,
} from "./styledCustomers";

export const Customers = ({ data }) => {
  return (
    <ContainerCustomers id="customers">
      <WrapperContent>
        <ContentDescription>
          <h2>{data?.titleDeposition}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: data?.bodyDeposition.html,
            }}
          />
        </ContentDescription>

        <WrapperLogos>
          {data?.imageCompanie.map(({ url, fileName }) => (
            <LogoCard key={fileName}>
              <img src={url} alt={fileName} loading="eager" />
            </LogoCard>
          ))}
        </WrapperLogos>
      </WrapperContent>
    </ContainerCustomers>
  );
};
