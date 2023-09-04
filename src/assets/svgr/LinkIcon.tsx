import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLinkIcon(props: ISvgProps) {
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
        d="M10 15v2H7A5 5 0 0 1 7 7h3v2H7a3 3 0 1 0 0 6h3ZM14 9V7h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M17 11H7v2h10v-2Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgLinkIcon;
