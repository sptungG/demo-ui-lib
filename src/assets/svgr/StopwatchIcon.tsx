import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgStopwatchIcon(props: ISvgProps) {
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
        d="M11.421 5.158C6.778 5.158 3 8.936 3 13.578 3 18.223 6.778 22 11.421 22c4.643 0 8.421-3.778 8.421-8.421 0-4.643-3.778-8.421-8.42-8.421Zm0 14.737a6.322 6.322 0 0 1-6.316-6.316 6.322 6.322 0 0 1 6.316-6.316 6.322 6.322 0 0 1 6.316 6.316 6.322 6.322 0 0 1-6.316 6.316Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M10.368 9.368h2.106v5.264h-2.106V9.368ZM8.263 2h6.316v2.105H8.263V2ZM19.098 8.007l-2.105-2.105 1.488-1.488 2.105 2.105-1.488 1.488Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgStopwatchIcon;
