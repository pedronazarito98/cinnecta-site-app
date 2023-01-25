import { forwardRef } from "react";
import React from "react";
import { TextAreaOnly } from "cinnecta-ui";

export const TextAreaBase = (
  { placeholder, value,optionLabel, optionValue, onChange, name, type, ...rest },
  ref
) => {
  return (
    <TextAreaOnly
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      refForFocus={ref}
      {...rest}
    >
      <option value={optionValue}>{optionLabel} </option>
    </TextAreaOnly>
  );
};
export const TextArea = forwardRef(TextAreaBase);