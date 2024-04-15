import { useEffect } from "react";
import { css, keyframes } from "styled-components";

const useRippleAnywhere = (uid: string) => {
  useEffect(() => {
    let mounted: boolean = true;
    const container = document.getElementById(uid);
    const handleClick = (event: MouseEvent) => {
      const rect = container
        ? container.getBoundingClientRect()
        : {
            width: 0,
            height: 0,
            left: 0,
            top: 0,
          };
      const ripple = document.createElement("div");
      const width = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = width + "px";
      ripple.style.height = width + "px";
      ripple.style.left = event.clientX - rect.left - width / 2 + "px";
      ripple.style.top = event.clientY - rect.top - width / 2 + "px";
      ripple.className = "ripple";
      container?.appendChild(ripple);

      setTimeout(() => mounted && container?.removeChild(ripple), 2000);
    };
    container?.addEventListener("mousedown" || "click", handleClick);

    return () => {
      mounted = false;
      container?.removeEventListener("mousedown" || "click", handleClick);
    };
  }, [uid]);
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

export const cssRippleAnywhere = css`
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

export default useRippleAnywhere;
