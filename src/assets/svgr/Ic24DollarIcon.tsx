import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIc24DollarIcon(props: ISvgProps) {
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
        d="M7 8.5c0-2.204 1.738-3.999 4.005-4.41l-.004-.045L11 3a1 1 0 1 1 2 0v1l-.004.09C15.263 4.501 17 6.295 17 8.5a1 1 0 0 1-1.993.117L15 8.5C15 7.151 13.684 6 12 6S9 7.151 9 8.5c0 1.299 1.22 2.415 2.814 2.495L12 11c2.734 0 5 1.983 5 4.5 0 2.202-1.735 3.995-4 4.41V21a1 1 0 1 1-2 0v-1.09c-2.265-.414-4-2.207-4-4.41a1 1 0 1 1 2 0c0 1.349 1.316 2.5 3 2.5s3-1.151 3-2.5c0-1.299-1.22-2.415-2.814-2.495L12 13c-2.734 0-5-1.983-5-4.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIc24DollarIcon;
