import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSlider01Icon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 12a4.002 4.002 0 0 1-3.874-3H2V7h7.126A4.002 4.002 0 0 1 17 8a4 4 0 0 1-4 4Zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M18 7h4v2h-4V7Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20a4.002 4.002 0 0 1-3.874-3H2v-2h2.126A4.002 4.002 0 0 1 12 16a4 4 0 0 1-4 4Zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M13 17h9v-2h-9v2Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgSlider01Icon;
