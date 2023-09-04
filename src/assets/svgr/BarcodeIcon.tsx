import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBarcodeIcon(props: ISvgProps) {
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
        d="M5.5 3.9h-3a.6.6 0 0 0-.6.6v3a.6.6 0 0 0 1.2 0V5.1h2.4a.6.6 0 0 0 0-1.2ZM5.5 18.9H3.1v-2.4a.6.6 0 1 0-1.2 0v3a.6.6 0 0 0 .6.6h3a.6.6 0 0 0 0-1.2ZM21.5 3.9h-3a.6.6 0 0 0 0 1.2h2.4v2.4a.6.6 0 0 0 1.2 0v-3a.6.6 0 0 0-.6-.6ZM21.5 15.9a.6.6 0 0 0-.6.6v2.4h-2.4a.6.6 0 0 0 0 1.2h3a.6.6 0 0 0 .6-.6v-3a.6.6 0 0 0-.6-.6ZM5.5 6.9a.6.6 0 0 0-.6.6v9a.6.6 0 0 0 1.2 0v-9a.6.6 0 0 0-.6-.6ZM8.5 6.9h-1a.6.6 0 0 0-.6.6v9a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-9a.6.6 0 0 0-.6-.6ZM10.5 6.9a.6.6 0 0 0-.6.6v9a.6.6 0 1 0 1.2 0v-9a.6.6 0 0 0-.6-.6ZM13.5 6.9h-1a.6.6 0 0 0-.6.6v9a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-9a.6.6 0 0 0-.6-.6ZM15.5 6.9a.6.6 0 0 0-.6.6v9a.6.6 0 0 0 1.2 0v-9a.6.6 0 0 0-.6-.6ZM18.5 6.9h-1a.6.6 0 0 0-.6.6v9a.6.6 0 0 0 .6.6h1a.6.6 0 0 0 .6-.6v-9a.6.6 0 0 0-.6-.6Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.2}
      />
    </svg>
  );
}

export default SvgBarcodeIcon;
