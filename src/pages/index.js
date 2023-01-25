import * as React from "react";

import { Seo } from "../components/Seo";
import { Banner } from "../view/Home/banner";
import Layout from "../templates/MainTemplate";
import { useHome } from "../hooks/methods/home";
import { StampsView } from "../view/Home/stamps";
import { ProductsView } from "../view/Home/products";
import { ServicesView } from "../view/Home/serviços";
import { CompaniesView } from "../view/Home/companies";
import { DepositionsView } from "../view/Home/depositions";

export default function Home() {
  const { data, isSuccess } = useHome();

  const {
    banner,
    depositionsCard,
    imageStamp,
    infoCard,
    productsCinnecta,
    stapmsCinnecta,
  } = isSuccess && data?.homepage;

  const dataStamps = [imageStamp, stapmsCinnecta];

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Banner data={isSuccess && banner} />
        <ServicesView data={infoCard} />
        <CompaniesView />
        <DepositionsView data={depositionsCard} />
        <ProductsView data={productsCinnecta} />
        <StampsView data={isSuccess && dataStamps} />
      </Layout>
    </>
  );
}
