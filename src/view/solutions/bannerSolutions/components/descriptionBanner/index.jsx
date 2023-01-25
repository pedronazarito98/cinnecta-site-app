import React from "react";
import { Button } from "../../../../../components/Button/Button";
import { ContentDescription } from "./styledDescriptionBanner";
import { Link } from "gatsby";

export function DescriptionBanner({ title, subTitle, paragraph, labelButton }) {
  return (
    <ContentDescription>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: paragraph }} />
      <Link to="/contato">
        <Button variant="primary" label={labelButton} />
      </Link>
    </ContentDescription>
  );
}
