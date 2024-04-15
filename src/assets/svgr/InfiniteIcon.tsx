import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgInfiniteIcon(props: ISvgProps) {
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
        d="M17.313 7a4.673 4.673 0 0 0-3.36 1.42l-1.136 1.166 1.227 1.261 1.17-1.201a2.922 2.922 0 0 1 2.098-.888 2.933 2.933 0 0 1 2.93 2.93 2.933 2.933 0 0 1-2.93 2.93 2.92 2.92 0 0 1-2.099-.889l-5.165-5.31a4.688 4.688 0 1 0 0 6.537l1.135-1.166-1.228-1.262-1.168 1.201a2.92 2.92 0 0 1-2.1.889 2.933 2.933 0 0 1-2.93-2.93 2.933 2.933 0 0 1 2.93-2.93c.823 0 1.567.34 2.1.888l5.165 5.31A4.688 4.688 0 1 0 17.312 7Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgInfiniteIcon;
