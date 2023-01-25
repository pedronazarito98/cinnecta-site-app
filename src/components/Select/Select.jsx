import { forwardRef } from "react";
import React from "react";
import { StyledSelect } from "./styledSelect";

export const SelectBase = (
  { placeholder, value, children, onChange, name, type, ...rest },
  ref
) => {
  return (
    <StyledSelect
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
      {...rest}
    >
      {children}
    </StyledSelect>
  );
};
export const Select = forwardRef(SelectBase);