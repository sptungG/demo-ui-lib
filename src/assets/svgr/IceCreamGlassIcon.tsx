import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIceCreamGlassIcon(props: ISvgProps) {
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
        d="M3 3a1 1 0 0 0-1 1v2.727a4.647 4.647 0 0 0 4.633 4.637 5.481 5.481 0 0 0 4.458 4.458v2.633H9.364a1 1 0 0 0 0 2h5.454a1 1 0 1 0 0-2h-1.727v-2.633a5.481 5.481 0 0 0 4.458-4.458 4.647 4.647 0 0 0 4.633-4.637V4a1 1 0 0 0-1-1H3Zm9.09 10.91c1.994 0 3.546-1.553 3.546-3.546a1 1 0 0 1 1-1h.91a2.647 2.647 0 0 0 2.636-2.637V5H4v1.727a2.647 2.647 0 0 0 2.636 2.637h.91a1 1 0 0 1 1 1c0 1.993 1.552 3.545 3.545 3.545Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIceCreamGlassIcon;
