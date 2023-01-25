import React from "react";
import { Seo } from "../../components/Seo";
import { useContact } from "../../hooks/methods/contact";
import Layout from "../../templates/MainTemplate";
import { ContactUs } from "../../view/contact/contactUs/contactUs";
import { DepositionsContact } from "../../view/contact/depositionContact";
import { LocationContact } from "../../view/contact/locationContact";
import { CompaniesView } from "../../view/Home/companies";

export default function Contact() {
  const { data, isSuccess } = useContact();

  const { descriptionContact, depositionContact, ourAddress } =
    isSuccess && data?.contactPage;
  return (
    <Layout>
      <Seo title="Contato" />
      <ContactUs descriptionData={isSuccess && descriptionContact} />
      <CompaniesView />
      <DepositionsContact data={isSuccess && depositionContact} />
      <LocationContact data={ourAddress} />
    </Layout>
  );
}
