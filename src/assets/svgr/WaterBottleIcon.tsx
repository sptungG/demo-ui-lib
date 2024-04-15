import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWaterBottleIcon(props: ISvgProps) {
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
        d="M8.5 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2.798l2.055 1.37A1 1 0 0 1 18 8v1.667c0 .63-.22 1.21-.587 1.666C17.78 11.79 18 12.37 18 13v1.667c0 .63-.22 1.21-.587 1.666C17.78 16.79 18 17.37 18 18v1.667a2.672 2.672 0 0 1-2.667 2.666H8.667A2.672 2.672 0 0 1 6 19.667V18c0-.63.22-1.21.587-1.667A2.653 2.653 0 0 1 6 14.667V13c0-.63.22-1.21.587-1.667A2.653 2.653 0 0 1 6 9.667V8a1 1 0 0 1 .445-.832L8.5 5.798V3Zm2 2.333h3V4h-3v1.333Zm-.697 2L8 8.535v1.132c0 .364.302.666.667.666h6.666A.672.672 0 0 0 16 9.667V8.535l-1.803-1.202H9.803ZM8 13c0-.364.302-.667.667-.667h6.666c.365 0 .667.303.667.667v1.667a.672.672 0 0 1-.667.666H8.667A.672.672 0 0 1 8 14.667V13Zm.667 4.333A.672.672 0 0 0 8 18v1.667c0 .364.302.666.667.666h6.666a.672.672 0 0 0 .667-.666V18a.672.672 0 0 0-.667-.667H8.667Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWaterBottleIcon;
