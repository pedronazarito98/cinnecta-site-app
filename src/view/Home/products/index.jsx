import React, { useRef } from "react";
import { Formhome } from "../formHome/FormHome";
import { Title } from "../../../components/Title/Title";
import { InfoCard } from "../../../components/InfoCard/InfoCard";
import { ContainerForm, ContainerProducts } from "./styledProducts";

export function ProductsView({ data }) {
  const formRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(1, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(formRef);

  return (
    <ContainerProducts>
      <Title label="Tomada de decisão a partir da inteligência de dados e análise do comportamento do cliente" />
      {data?.map(
        ({
          id,
          nameProduct,
          descriptionProduct,
          bodyProduct,
          labelButton,
          redirectButton,
          reverseCard,
          imageProduct,
        }) => (
          <InfoCard
            key={id}
            image={imageProduct.url}
            title={nameProduct}
            subTitle={descriptionProduct}
            description={bodyProduct.html}
            reverseCard={reverseCard}
            labelButton={labelButton}
            onClick={executeScroll}
            redirect={redirectButton}
          />
        )
      )}
      <ContainerForm ref={formRef}>
        <Title label="Saiba como impulsionar o ticket dos seus melhores clientes" />
        <Formhome key="id" />
      </ContainerForm>
    </ContainerProducts>
  );
}
