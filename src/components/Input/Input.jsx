import { forwardRef } from "react";
import { FileInput, StyledInput } from "./StyledInput";
import React from "react";

export const InputBase = (
  { placeholder, value, onChange, name, type, ...rest },
  ref
) => {
  return (
    <>
      {type === "file" ? (
        <FileInput
          name={name}
          type={type}
          accept=".pdf,.doc"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
      ) : (
        <StyledInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
      )}
    </>
  );
};
export const Input = forwardRef(InputBase);
