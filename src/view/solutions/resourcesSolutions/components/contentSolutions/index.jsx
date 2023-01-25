import { Link } from "gatsby";
import React from "react";
import { StyledContentSolution } from "./styledContentSolution";
import { Button } from "../../../../../components/Button/Button";

export const ContentSolutions = ({ exclusiveFeature }) => {
  const content = exclusiveFeature
    ? [].concat(exclusiveFeature[1], exclusiveFeature[2])
    : [];

  return (
    <StyledContentSolution>
      <h2>{exclusiveFeature[0]?.title}</h2>

      {content?.map(({ title, description }) => (
        <>
          <h3>{title} </h3>
          <p>{description}</p>
        </>
      ))}
      <Link to="/contato">
        <Button variant="primary" label="fale com um especialista" />
      </Link>
    </StyledContentSolution>
  );
};
