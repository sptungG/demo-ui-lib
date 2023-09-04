import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgUserPinIcon(props: ISvgProps) {
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
        d="M14 8c0 1.152-.849 2-2 2-1.15 0-2-.848-2-2 0-1.152.85-2 2-2 1.151 0 2 .848 2 2ZM8 14.6c0-1.988 1.791-3.6 4-3.6s4 1.612 4 3.6v.386H8V14.6Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2h14c1.103 0 2 .897 2 2v13c0 1.103-.897 2-2 2h-4l-3 3-3-3H5c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2Zm7 17 2-2h5.002L19 4H5v13h5l2 2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgUserPinIcon;
