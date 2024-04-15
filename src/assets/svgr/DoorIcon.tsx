import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDoorIcon(props: ISvgProps) {
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
        d="M5 2h11.123a3.034 3.034 0 0 1 3.033 3.033V19.19a1.011 1.011 0 0 1-1.011 1.01h-3.034"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5 2 7.673 1.535a3.033 3.033 0 0 1 2.438 2.974v14.48a1.011 1.011 0 0 1-1.209.991l-7.276-1.454A2.022 2.022 0 0 1 5 18.543V2ZM12.078 12.111v2.023"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDoorIcon;
