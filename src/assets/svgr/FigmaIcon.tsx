import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFigmaIcon(props: ISvgProps) {
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
        d="M8.945 2C6.767 2 5 3.757 5 5.923c0 1.225.565 2.32 1.45 3.039a3.908 3.908 0 0 0 0 6.076A3.908 3.908 0 0 0 5 18.076C5 20.242 6.767 22 8.945 22s3.945-1.758 3.945-3.924V15.28a3.942 3.942 0 0 0 2.165.644C17.233 15.924 19 14.166 19 12a3.908 3.908 0 0 0-1.45-3.038A3.908 3.908 0 0 0 19 5.923C19 3.757 17.233 2 15.055 2h-6.11ZM6.78 5.923A2.16 2.16 0 0 1 8.945 3.77h2.165v4.307H8.945A2.16 2.16 0 0 1 6.78 5.923Zm10.44 0a2.16 2.16 0 0 1-2.165 2.154H12.89V3.77h2.165a2.16 2.16 0 0 1 2.165 2.153ZM6.78 12a2.16 2.16 0 0 1 2.165-2.153h2.165v4.306H8.922A2.16 2.16 0 0 1 6.78 12Zm6.11 0a2.16 2.16 0 0 1 2.165-2.153A2.16 2.16 0 0 1 17.22 12a2.16 2.16 0 0 1-2.165 2.153A2.16 2.16 0 0 1 12.89 12Zm-6.11 6.076c0-1.18.958-2.14 2.142-2.152h2.188v2.152a2.16 2.16 0 0 1-2.165 2.154 2.16 2.16 0 0 1-2.165-2.154Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFigmaIcon;
