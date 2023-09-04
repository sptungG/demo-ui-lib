import React, { memo } from "react";
import styled, { keyframes } from "styled-components";

export interface LoadingCircularProgressProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const LoadingCircularProgress = memo((props: LoadingCircularProgressProps) => {
  const { size = "lg", ...remainProps } = props;
  return <StyledLoadingCircularProgress {...remainProps} size={size} />;
});

const StyledCircularProgressRotateBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;
const StyledCircularProgressRotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

const StyledLoadingCircularProgress = styled.div<LoadingCircularProgressProps>`
  height: ${({ theme, size }) => {
    switch (size) {
      case "xs":
        return theme.pxToRem(12);
      case "sm":
        return theme.pxToRem(16);
      case "md":
        return theme.pxToRem(24);
      case "lg":
        return theme.pxToRem(48);
      case "xl":
      default:
        return theme.pxToRem(56);
    }
  }};
  width: ${({ theme, size }) => {
    switch (size) {
      case "xs":
        return theme.pxToRem(12);
      case "sm":
        return theme.pxToRem(16);
      case "md":
        return theme.pxToRem(24);
      case "lg":
        return theme.pxToRem(48);
      case "xl":
      default:
        return theme.pxToRem(56);
    }
  }};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: ${({ theme, size }) => {
      switch (size) {
        case "xs":
          return theme.pxToRem(0.88);
        case "sm":
          return theme.pxToRem(1.4);
        case "md":
          return theme.pxToRem(2.45);
        case "lg":
          return theme.pxToRem(3.5);
        case "xl":
        default:
          return theme.pxToRem(4);
      }
    }}
    solid;
  border-color: ${({ theme }) => theme.palette.primary.main} ${({ theme }) => theme.palette.primary.main} transparent
    transparent;
  box-sizing: border-box;
  animation: ${StyledCircularProgressRotate} 1s linear infinite;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: ${({ theme, size }) => {
      switch (size) {
        case "xs":
          return theme.pxToRem(0.44);
        case "sm":
          return theme.pxToRem(0.7);
        case "md":
          return theme.pxToRem(1.225);
        case "lg":
          return theme.pxToRem(1.75);
        case "xl":
        default:
          return theme.pxToRem(2);
      }
    }};
    border-radius: 50%;
    transform-origin: center center;
    border: ${({ theme, size }) => {
        switch (size) {
          case "xs":
            return theme.pxToRem(0.88);
          case "sm":
            return theme.pxToRem(1.4);
          case "md":
            return theme.pxToRem(2.45);
          case "lg":
            return theme.pxToRem(3.5);
          case "xl":
          default:
            return theme.pxToRem(4);
        }
      }}
      solid;
    animation: ${StyledCircularProgressRotateBack} 0.5s linear infinite;
    border-color: transparent transparent ${({ theme }) => theme.palette.success.main}
      ${({ theme }) => theme.palette.success.main};
  }
`;

LoadingCircularProgress.displayName = "LoadingCircularProgress";
export default memo(LoadingCircularProgress);
