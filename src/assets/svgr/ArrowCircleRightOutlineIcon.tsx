import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowCircleRightOutlineIcon(props: ISvgProps) {
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
        d="M13.17 13H7v-2h6.17l-2.58-2.59L12 7l5 5-5 5-1.41-1.41L13.17 13Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm2 0a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowCircleRightOutlineIcon;
