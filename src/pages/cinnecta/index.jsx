import React from "react";
import { Seo } from "../../components/Seo";
import { useAbout } from "../../hooks/methods/about";
import { useHome } from "../../hooks/methods/home";
import Layout from "../../templates/MainTemplate";
import { BannerCinnecta } from "../../view/cinnecta/banner";
import { CultureCinnecta } from "../../view/cinnecta/culture";
import { Customers } from "../../view/cinnecta/customers";
import { NewsAbout } from "../../view/cinnecta/newsAbout";
import { Timeline } from "../../view/cinnecta/timeline";
import { ValuesCinnecta } from "../../view/cinnecta/valuesCinnecta";
import { StampsView } from "../../view/Home/stamps";

export default function Solutions() {
  const { data: homeData, isSuccess: homeSuccess } = useHome();
  const { data: aboutData, isSuccess: aboutSuccess } = useAbout();

  const { imageStamp, stapmsCinnecta } = homeSuccess && homeData?.homepage;
  const dataStamps = [imageStamp, stapmsCinnecta];

  const {
    newsAbout,
    bannerAbout,
    cardCinnecta,
    imageCulture,
    valuesCinnecta,
    timelineContent,
    depositionCompanies,
  } = aboutSuccess && aboutData?.aboutPage;

  return (
    <Layout>
      <Seo
        title="a cinnecta"
        clickBait="Conheça a Cinnecta - inteligência de dados de clientes"
        description="Conheça a Cinnecta e saiba como ajudamos grandes empresas a identificarem as melhores oportunidades da sua base de clientes."
      />
      <BannerCinnecta data={bannerAbout} cardCinnecta={cardCinnecta} />
      <Timeline data={timelineContent} />
      <Customers data={depositionCompanies} />
      <ValuesCinnecta data={valuesCinnecta} />
      <CultureCinnecta data={imageCulture} />
      <NewsAbout data={newsAbout} />
      <StampsView data={homeSuccess && dataStamps} />
    </Layout>
  );
}
