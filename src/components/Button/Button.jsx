import React from "react";
import { StyledButton } from "./StyledButton";

export function Button({
  disabled,
  onClick,
  label,
  variant = "primary",
  children,
  ...rest
}) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type="submit"
      variant={variant}
      {...rest}
    >
      {label}
      {children && children}
    </StyledButton>
  );
}
