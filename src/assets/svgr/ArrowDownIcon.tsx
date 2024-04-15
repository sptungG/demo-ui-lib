import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowDownIcon(props: ISvgProps) {
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
        d="M4.9 4.9c3.89-3.889 10.222-3.864 14.143.057 3.92 3.921 3.946 10.253.056 14.142-3.89 3.89-10.22 3.864-14.142-.056C1.037 15.122 1.011 8.79 4.901 4.9ZM11 7.997v5.175L9.107 11.29a.997.997 0 1 0-1.411 1.412l3.944 3.944c.2.2.51.2.71 0l3.944-3.944a.997.997 0 1 0-1.411-1.412L13 13.171V7.996c0-.55-.45-1.001-1.001-1.001-.55 0-1.001.45-1.001 1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowDownIcon;
