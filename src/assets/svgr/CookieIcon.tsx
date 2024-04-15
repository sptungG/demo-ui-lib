import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCookieIcon(props: ISvgProps) {
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
        d="M12.065 2C17.555 2.035 22 6.503 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c3.24.906 6.157-1.994 5-5 3.336.59 5.655-2.268 5.065-5Zm1.185 14.167a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-5.697-2.5A1.667 1.667 0 1 1 7.55 17a1.667 1.667 0 0 1 .002-3.334Zm9.447-2.5a1.667 1.667 0 1 1-.001 3.334A1.667 1.667 0 0 1 17 11.167Zm-5-.834a.834.834 0 1 1 0 1.668.834.834 0 0 1 0-1.668Zm-7.5-2.5a.834.834 0 1 1 0 1.668.834.834 0 0 1 0-1.668Zm11.25-1.666a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM3.25 4.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm5-1.667a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5ZM5.333 2a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCookieIcon;
