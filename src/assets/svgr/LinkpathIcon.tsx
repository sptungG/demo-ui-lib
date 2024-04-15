import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLinkpathIcon(props: ISvgProps) {
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
        d="M19.041 13.253c.568-.327.918-.933.918-1.588v-5.22c0-.656-.35-1.261-.918-1.59l-4.52-2.61a1.835 1.835 0 0 0-1.835 0l-4.52 2.61a1.835 1.835 0 0 0-.918 1.59v5.22c0 .655.35 1.26.918 1.588l4.52 2.61a1.835 1.835 0 0 0 1.835 0l4.52-2.61Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m4.959 10.747 1.372-.793v1.71c0 .984.525 1.892 1.376 2.384l4.52 2.61c.852.491 1.901.491 2.753 0l1.772-1.023v1.92c0 .656-.35 1.262-.918 1.59l-4.52 2.61a1.834 1.834 0 0 1-1.835 0l-4.52-2.61a1.834 1.834 0 0 1-.918-1.59v-5.22c0-.655.35-1.26.918-1.588Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLinkpathIcon;
