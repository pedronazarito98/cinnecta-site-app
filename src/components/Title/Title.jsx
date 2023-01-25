import React from "react";
import { StyledTitle } from "./styledTitle";

export function Title({ label, id, ref, ...rest }) {
  return (
    <StyledTitle ref={ref} {...rest}>
      {label}
    </StyledTitle>
  );
}