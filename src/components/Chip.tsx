import React, { memo, MouseEventHandler, ReactNode } from "react";
import styled, { css, CSSObject } from "styled-components";
import IconButton from "./IconButton";
import ClearIcon from "../assets/svgr/ClearIcon";
import { cssSpacing, getColorStatusByVariant, PropTypes, Spacing } from "../theme";

export interface ChipProps extends Spacing {
  label?: string;
  variant?: PropTypes.ColorVariant;
  size?: "small" | "regular";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  width?: CSSObject["width"];
  maxWidth?: CSSObject["maxWidth"];
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ variant = "default", label, size = "regular", startIcon, onDelete, width, ...props }, ref) => {
    let endIcon = props.endIcon;
    if (!props.endIcon && !!onDelete) {
      endIcon = (
        <StyledIconButton onClick={onDelete} size="extra-small" color="primary" variant="text">
          <StyledClearIcon size={size} />
        </StyledIconButton>
      );
    }

    return (
      <StyledChip {...props} _width={width} ref={ref} variant={variant} size={size}>
        {startIcon}
        <StyledChipLabel variant={variant} size={size}>
          {label}
        </StyledChipLabel>
        {endIcon}
      </StyledChip>
    );
  }
);

Chip.displayName = "Chip";
export default memo(Chip);

const StyledIconButton = styled(IconButton)`
  margin: 0 ${({ theme }) => theme.pxToRem(4)};
  padding: 0;
`;

const StyledClearIcon = styled(ClearIcon)<Pick<ChipProps, "size">>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: ${({ theme }) => theme.pxToRem(12)};
          height: ${({ theme }) => theme.pxToRem(12)};
        `;
      default:
        return css`
          width: ${({ theme }) => theme.pxToRem(16)};
          height: ${({ theme }) => theme.pxToRem(16)};
        `;
    }
  }}
`;

const StyledChipLabel = styled.span<Pick<ChipProps, "size" | "variant">>`
  padding: 0 ${({ theme }) => theme.pxToRem(8)};
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          ${({ theme }) => theme.typography.body2}
        `;
      default:
        return css`
          ${({ theme }) => theme.typography.body1}
        `;
    }
  }}

  ${({ variant }) => getColorStatusByVariant(variant)};
`;

const StyledChip = styled.div<Partial<ChipProps> & { _width?: CSSObject["width"] }>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: ${({ theme }) => theme.pxToRem(4)};
  border-radius: ${({ theme }) => theme.pxToRem(16)};
  width: ${({ _width, theme }) => (_width ? (isNaN(+_width) ? _width : theme.pxToRem(+_width)) : undefined)};
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? (isNaN(+maxWidth) ? maxWidth : theme.pxToRem(+maxWidth)) : undefined};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          height: ${({ theme }) => theme.pxToRem(24)};
        `;
      default:
        return css`
          height: ${({ theme }) => theme.pxToRem(32)};
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "error":
      case "warning":
      case "success":
      case "extra":
      case "primary":
        return css`
          border: 1px solid ${({ theme }) => theme.palette[variant]["40"]};
          background-color: ${({ theme }) => theme.palette[variant]["5"]};
        `;
      case "inactive":
        return css`
          border: 1px solid transparent;
          background-color: ${({ theme }) => theme.palette.ink["5"]};
        `;
      case "disabled":
        return css`
          border: 1px solid #cfd1d3;
          background-color: ${({ theme }) => theme.palette.ink["5"]};
        `;
      default:
        return css`
          border: 1px solid transparent;
          background-color: ${({ theme }) => theme.palette.primary["15"]};
        `;
    }
  }}

  ${({ onClick }) => {
    return !!onClick
      ? css`
          cursor: pointer;

          &:hover,
          &:focus {
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
          }
        `
      : null;
  }}

  ${(props) => cssSpacing(props)}
`;
