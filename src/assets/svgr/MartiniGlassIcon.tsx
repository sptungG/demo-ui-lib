import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMartiniGlassIcon(props: ISvgProps) {
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
        d="M2.103 3.558A1 1 0 0 1 3 3h18.182a1 1 0 0 1 .792 1.61l-8.883 11.548v3.206h1.727a1 1 0 1 1 0 2H9.364a1 1 0 1 1 0-2h1.727v-3.206L2.207 4.61a1 1 0 0 1-.104-1.052Zm5.725 5.078 4.263 5.542 4.263-5.542H7.828Zm-1.538-2h11.602L19.151 5H5.031L6.29 6.636Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMartiniGlassIcon;
