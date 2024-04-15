import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCloudOutlineIcon(props: ISvgProps) {
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
        d="m6.296 9.898-.948.155A4.002 4.002 0 0 0 6 18h13a3 3 0 0 0 .46-5.965l-1.316-.202-.322-1.291A6.003 6.003 0 0 0 6.768 9.06l-.472.837Zm13.467.16a8.003 8.003 0 0 0-14.738-1.98A6.002 6.002 0 0 0 6 20h13a5 5 0 0 0 .763-9.942Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCloudOutlineIcon;
