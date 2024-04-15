import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgHouseIcon(props: ISvgProps) {
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
        d="M20.334 7.641V2.625A.625.625 0 0 0 19.709 2h-2.084a.625.625 0 0 0-.625.625v1.95a10.083 10.083 0 0 0-5-1.325c-5.521 0-10.01 4.404-10 9.81a.62.62 0 0 0 .625.606h1.041v7.5c0 .46.374.833.834.833h1.666V12h11.667v10H19.5c.46 0 .834-.373.834-.834v-7.5h1.041a.62.62 0 0 0 .625-.604 9.59 9.59 0 0 0-1.666-5.42Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M8.458 19.916h7.083a1.042 1.042 0 1 1 0 2.085H8.458a1.042 1.042 0 1 1 0-2.085ZM8.458 16.584h7.083a1.042 1.042 0 1 1 0 2.084H8.458a1.042 1.042 0 1 1 0-2.084ZM8.458 13.25h7.083a1.042 1.042 0 1 1 0 2.084H8.458a1.042 1.042 0 1 1 0-2.084Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgHouseIcon;
