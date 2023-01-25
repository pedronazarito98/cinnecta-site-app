import React from "react";
import { Seo } from "../../components/Seo";
import { useCarers } from "../../hooks/methods/carers";
import Layout from "../../templates/MainTemplate";
import { BannerCarreiras } from "../../view/carreiras/banner";
import { Benefits } from "../../view/carreiras/Benefits";
import { DepositionsCarreiras } from "../../view/carreiras/depositions";
import { LocationCinnecta } from "../../view/carreiras/locationCinnecta";
import { StampsCareers } from "../../view/carreiras/StampsCareers";
import { Vacancies } from "../../view/carreiras/Vacancies";
import { CultureCinnecta } from "../../view/cinnecta/culture";

export default function Carreiras() {
  const { data, isSuccess } = useCarers();

  const {
    noVacancy,
    imageCareers,
    stampsCareers,
    openVacancies,
    bannerCareers,
    locationCinnecta,
    benefitsCinnecta,
    benefitsContCinnecta,
    depositionCollaborators,
  } = isSuccess && data?.careersPage;

  return (
    <Layout>
      <Seo
        title="Carreiras"
        clickBait="Carreiras  | Cinnecta - #1 de Minas GPTW"
        description="Pessoas. Dados. Inovação. É isso que nos move. Faça parte da melhor empresa para se trabalhar em Minas Gerais, confira nossas vagas!"
      />
      <BannerCarreiras data={bannerCareers} />
      <div style={{ marginBottom: 80, marginTop: 80 }}>
        <DepositionsCarreiras data={depositionCollaborators} />
      </div>
      <CultureCinnecta data={imageCareers} />
      <StampsCareers data={stampsCareers} />
      <Benefits
        benefitsCinnecta={isSuccess && benefitsCinnecta}
        benefitsContCinnecta={isSuccess && benefitsContCinnecta}
      />
      <Vacancies data={openVacancies} noVacancy={noVacancy} />
      <LocationCinnecta data={isSuccess && locationCinnecta} />
    </Layout>
  );
}
