import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgListOlIcon(props: ISvgProps) {
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
        d="M6.486 9H5.49V6h-.994V5h1.989v4ZM9.069 6H21v2H9.069V6ZM21 11H9.069v2H21v-2ZM21 16H9.069v2H21v-2ZM5.989 16H4v-1h2.983v4H4v-1h1.989v-.5h-.995v-1h.995V16ZM4 11h1.79L4 13.1v.9h2.983v-1h-1.79l1.79-2.1V10H4v1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgListOlIcon;
