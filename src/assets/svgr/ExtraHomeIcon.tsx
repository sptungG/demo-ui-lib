import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgExtraHomeIcon(props: ISvgProps) {
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
      viewBox="0 0 25 24"
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
        d="M7.002 22a3 3 0 0 1-3-3v-6h-1c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-10Zm5-17.586-6.648 6.65a1 1 0 0 1 .649.936v7a1 1 0 0 0 1 1h2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h2a1 1 0 0 0 1-1v-7a1 1 0 0 1 .649-.937l-6.65-6.649Zm1 11.586h-2v4h2v-4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgExtraHomeIcon;
