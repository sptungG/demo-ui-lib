import React, { memo } from "react";
import styled, { css } from "styled-components";
import CircleCheckOutlineIcon from "../assets/svgr/CircleCheckOutlineIcon";
import ErrorOutlineIcon from "../assets/svgr/ErrorOutlineIcon";

interface AlertProps {
  severity: "success" | "error" | "notify";
}

const Alert = React.forwardRef<HTMLDivElement, React.PropsWithChildren<AlertProps>>(
  ({ severity = "success", children, ...props }, ref) => {
    let Icon = <CircleCheckOutlineIcon />;
    if (severity === "error") {
      Icon = <ErrorOutlineIcon />;
    }
    return (
      <StyledAlert ref={ref} severity={severity} {...props}>
        {Icon}
        {children}
      </StyledAlert>
    );
  }
);

Alert.displayName = "Alert";
export default memo(Alert);

const StyledAlert = styled.div<Pick<AlertProps, "severity">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: #fff;
  white-space: pre-wrap;
  width: ${({ theme }) => theme.pxToRem(600)};

  svg {
    color: #fff;
    height: ${({ theme }) => theme.pxToRem(24)};
    width: auto;
    margin-right: ${({ theme }) => theme.pxToRem(4)};
    flex: none;
  }

  ${({ theme }) => theme.typography["body1"]};
  padding: ${({ theme }) => theme.pxToRem(14)} ${({ theme }) => theme.pxToRem(64)};

  ${({ severity }) => {
    switch (severity) {
      case "notify":
        return css`
          background: ${({ theme }) => theme.palette.primary.main};
        `;
      case "error":
        return css`
          background: ${({ theme }) => theme.palette.error.textStatus};
        `;
      case "success":
      default:
        return css`
          background: ${({ theme }) => theme.palette.success.textStatus};
        `;
    }
  }}
`;
