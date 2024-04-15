import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLoyalty1Icon(props: ISvgProps) {
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="m10.806 11.113-1.799-.274-.804-1.707a.223.223 0 0 0-.407 0l-.803 1.707-1.8.274a.223.223 0 0 0-.129.069.244.244 0 0 0 .005.336l1.3 1.329-.307 1.876a.247.247 0 0 0 .014.13.236.236 0 0 0 .077.102.22.22 0 0 0 .238.018L8 14.087l1.609.886a.216.216 0 0 0 .144.023.236.236 0 0 0 .185-.273l-.308-1.877 1.301-1.328a.24.24 0 0 0 .066-.136.235.235 0 0 0-.19-.27Z"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={1.5}
      />
      <rect
        x={1.875}
        y={5.875}
        width={20.25}
        height={13.25}
        rx={2.125}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={1.75}
      />
      <path
        d="M14 11h5M14 14h3"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgLoyalty1Icon;
