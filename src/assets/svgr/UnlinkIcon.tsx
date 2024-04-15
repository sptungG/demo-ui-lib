import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgUnlinkIcon(props: ISvgProps) {
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
        d="m21.707 20.293-18-18-1.414 1.414L5.745 7.16A5.002 5.002 0 0 0 7 17h3v-2H7a3 3 0 0 1 0-6h.586l2 2H7v2h4.586l8.707 8.707 1.414-1.414ZM18.708 14.467l1.428 1.428A5 5 0 0 0 17 7h-3v2h3a3 3 0 0 1 1.708 5.467Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgUnlinkIcon;
