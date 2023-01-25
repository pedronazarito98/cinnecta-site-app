import React from "react";
import { Seo } from "../../components/Seo";
import { useSolutions } from "../../hooks/methods/solutions";
import Layout from "../../templates/MainTemplate";
import { CompaniesView } from "../../view/Home/companies";
import { BannerSolutions } from "../../view/solutions/bannerSolutions";
import { DepositionsSolutions } from "../../view/solutions/depositionsSolutions";
import { DescriptionSolutions } from "../../view/solutions/descriptionSolutions";
import { FormSolutions } from "../../view/solutions/formSolutions/formSolutions";
import { LgpdSolutions } from "../../view/solutions/lgpdSolutions";
import { ResourcesSolutions } from "../../view/solutions/resourcesSolutions";
import { TechnologiesSolutions } from "../../view/solutions/technologiesSolutions";

export default function Solutions() {
  const { data, isSuccess } = useSolutions();

  const {
    bannerSolution,
    depositionsCard,
    infoCard,
    lgpdSolutions,
    productCinnecta,
    technologiesCard,
    exclusiveFeature,
  } = isSuccess && data?.solutionsPage;

  return (
    <Layout>
      <Seo
        title="Soluções"
        description="Rentabilização de clientes, a partir de inteligência de dados e análise de comportamento. Identifique oportunidades na sua base. Conheça a Cinnecta."
      />
      <BannerSolutions data={isSuccess && bannerSolution} infoCard={infoCard} />
      <DepositionsSolutions data={isSuccess && depositionsCard} />
      <DescriptionSolutions data={productCinnecta} />
      <CompaniesView />
      <ResourcesSolutions data={isSuccess && exclusiveFeature} />
      <TechnologiesSolutions data={technologiesCard} />
      <LgpdSolutions data={isSuccess && lgpdSolutions} />
      <FormSolutions />
    </Layout>
  );
}
