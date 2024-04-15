import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSadIcon(props: ISvgProps) {
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
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.493 11.986a1.493 1.493 0 1 0 0-2.986 1.493 1.493 0 0 0 0 2.986Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.71 14.636C10.316 14.234 11.076 14 12 14s1.685.234 2.29.636c.597.397.983.92 1.23 1.413a4.67 4.67 0 0 1 .48 1.919v.024h-1l-1 .001V18v-.008l-.003-.057a2.68 2.68 0 0 0-.266-.993 1.633 1.633 0 0 0-.551-.645c-.24-.16-.605-.3-1.18-.3s-.94.14-1.18.3c-.246.163-.422.389-.55.645a2.68 2.68 0 0 0-.27 1.05V18v-.006s0-.002-1-.002H8v-.024a2.396 2.396 0 0 1 .008-.175 4.67 4.67 0 0 1 .472-1.744 3.627 3.627 0 0 1 1.23-1.413Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSadIcon;
