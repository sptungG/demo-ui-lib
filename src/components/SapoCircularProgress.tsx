import React, { memo } from "react";
import styled, { keyframes } from "styled-components";
import EsclipseDotIcon from "../assets/svgr/EsclipseDotIcon";
import EsclipseDotGreenIcon from "../assets/svgr/EsclipseDotGreenIcon";
import { cssSpacing, Spacing } from "../theme";
import SapoIcon from "../assets/svgr/SapoIcon";

export interface SapoCircularProgressProps extends Spacing {
  variant?: "primary" | "success";
}

const SapoCircularProgress = React.forwardRef<HTMLDivElement, SapoCircularProgressProps>(
  ({ variant = "primary", children }, ref) => {
    return (
      <StyledSapoCircularProgress ref={ref} variant={variant}>
        {variant === "primary" ? <StyledEsclipseDotIcon /> : <StyledEclipseDotGreenIcon />}
        <SapoIcon size="large" />
      </StyledSapoCircularProgress>
    );
  }
);
const StyledSapoCircularProgressAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSapoCircularProgress = styled.div<Partial<SapoCircularProgressProps>>`
  height: ${({ theme }) => theme.pxToRem(80)};
  width: ${({ theme }) => theme.pxToRem(80)};
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
  z-index: 9;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
    border-radius: 50%;
    background: ${({ variant, theme }) => theme.palette[variant || "primary"].gradient};
  }

  ${(props) => cssSpacing(props)}
`;

const StyledEsclipseDotIcon = styled(EsclipseDotIcon)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${StyledSapoCircularProgressAnimation} 0.8s linear infinite;
`;

const StyledEclipseDotGreenIcon = styled(EsclipseDotGreenIcon)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${StyledSapoCircularProgressAnimation} 0.8s linear infinite;
`;

SapoCircularProgress.displayName = "SapoCircularProgress";
export default memo(SapoCircularProgress);
