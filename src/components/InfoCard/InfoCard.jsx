import { Link } from "gatsby";
import React from "react";
import { Button } from "../Button/Button";
import { ContainerInfoCard, ContentInfoCard } from "./styledInfoCard";

export function InfoCard({
  reverseCard,
  image,
  title,
  description,
  subTitle,
  labelButton,
  onClick,
  redirect,
}) {
  return (
    <ContainerInfoCard reverseCard={reverseCard}>
      <img src={image} alt="img" loading="eager" />
      <ContentInfoCard>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        {redirect && labelButton && (
          <div>
            <Button variant="primary" onClick={onClick} label={labelButton} />
          </div>
        )}

        {!redirect && (
          <Link to="/contato">
            <Button variant="primary" label={labelButton} />
          </Link>
        )}
      </ContentInfoCard>
    </ContainerInfoCard>
  );
}
