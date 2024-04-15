import React, { memo } from "react";
import styled from "styled-components";
import { TextFieldProps } from "../TextField";

interface FieldsetProps extends Pick<TextFieldProps, "error" | "variant" | "focused"> {}

const Fieldset = memo((props: FieldsetProps) => {
  return <StyledFieldset {...props} />;
});

export default Fieldset;

const StyledFieldset = styled.fieldset<FieldsetProps>`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: ${({ variant }) => (variant === "standard" ? "none" : "3px")};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  overflow: hidden;
  box-sizing: border-box;
  border-top: ${({ variant }) => (variant === "standard" ? "none" : undefined)};
  border-left: ${({ variant }) => (variant === "standard" ? "none" : undefined)};
  border-right: ${({ variant }) => (variant === "standard" ? "none" : undefined)};

  border-color: ${({ theme, error, focused }) =>
    error ? theme.palette.error.main : focused ? theme.palette.primary.main : undefined} !important;
`;
