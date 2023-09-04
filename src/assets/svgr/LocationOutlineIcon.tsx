import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLocationOutlineIcon(props: ISvgProps) {
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
      <path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7s-7 3.13-7 7Zm2 0c0-2.765 2.235-5 5-5s5 2.235 5 5c0 1.86-1.316 4.13-3.035 6.186A28.245 28.245 0 0 1 12 18.297a28.245 28.245 0 0 1-1.965-2.11C8.315 14.13 7 11.86 7 10Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLocationOutlineIcon;
