import React, { memo } from "react";
import styled, { keyframes } from "styled-components";
import EclipseIcon from "../assets/svgr/EclipseIcon";

interface CircularProgressProps {
  color?: "primary" | "secondary";
  size?: "regular" | "large" | string;
}

const CircularProgress = memo((props: CircularProgressProps) => {
  const { color = "primary", size = "regular", ...remainProps } = props;
  return <StyledCircularProgress {...remainProps} size={size} color={color} />;
});

const StyledCircularProgressAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledCircularProgress = styled(EclipseIcon)<CircularProgressProps>`
  height: ${({ theme, size }) => {
    switch (size) {
      case "regular":
        return theme.pxToRem(20);
      case "large":
        return theme.pxToRem(36);
      default:
        return size;
    }
  }};
  width: ${({ theme, size }) => {
    switch (size) {
      case "regular":
        return theme.pxToRem(20);
      case "large":
        return theme.pxToRem(36);
      default:
        return size;
    }
  }};
  color: ${({ theme, color }) => {
    if (color === "primary") {
      return theme.palette.primary.main;
    } else if (color === "secondary") {
      return "#fff";
    }
  }};
  animation: ${StyledCircularProgressAnimation} 0.5s linear infinite;
`;

CircularProgress.displayName = "CircularProgress";
export default CircularProgress;
