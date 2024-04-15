import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgWhatsAppIcon(props: ISvgProps) {
  const sizeCheck = (value: any) => {
    if (props.size === "small") {
      return 20;
    } else if (props.size === "regular") {
      return 24;
    } else if (props.size === "large") {
      return 36;
    } else {
      return value;
    }
  };
  const colorCheck = (value: any) => {
    if (value === "primary") {
      return "#0088FF";
    } else if (value === "success") {
      return "#0FD186";
    } else if (value === "error") {
      return "#FF4D4D";
    } else if (value === "warning") {
      return "#FFAE06";
    } else {
      return value;
    }
  };
  return (
    <svg
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M9 0C4.027 0 0 4.027 0 9c0 1.98.63 3.803 1.71 5.287L.472 17.55l3.578-1.035A8.904 8.904 0 0 0 9 18c4.973 0 9-4.027 9-9s-4.027-9-9-9Zm4.793 12.735-.968.945c-1.012 1.013-3.69-.09-6.052-2.475-2.363-2.363-3.42-5.04-2.475-6.03l.967-.968c.36-.36.968-.36 1.35 0l1.418 1.418c.495.495.292 1.35-.36 1.553-.45.157-.766.652-.608 1.102.247 1.058 1.62 2.363 2.632 2.61.45.112.968-.158 1.103-.607.202-.653 1.057-.855 1.552-.36l1.418 1.417c.36.383.36.99.023 1.395Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgWhatsAppIcon;
