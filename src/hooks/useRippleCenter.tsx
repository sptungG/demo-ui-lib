import { useEffect } from "react";
import { css, keyframes } from "styled-components";

const useRippleCenter = (idAppend: string, idListener?: string) => {
  useEffect(() => {
    let mounted: boolean = true;
    const container = document.getElementById(idAppend);
    const handleClick = () => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      container?.appendChild(ripple);
      setTimeout(() => mounted && container?.removeChild(ripple), 2000);
    };
    document.getElementById(idListener || idAppend)?.addEventListener("mousedown" || "click", handleClick);
    return () => {
      mounted = false;
      document.getElementById(idListener || idAppend)?.removeEventListener("mousedown" || "click", handleClick);
    };
  }, [idAppend, idListener]);
};

const StyledRippleAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1.2;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
`;

export const cssRippleCenter = css`
  overflow: hidden;
  position: relative;
  .ripple {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 50%;
    background-color: ${(p) => p.theme.palette.primary["60"]};
    z-index: 0;
    animation: ${StyledRippleAnimation} 0.8s forwards;
  }
`;

export default useRippleCenter;
