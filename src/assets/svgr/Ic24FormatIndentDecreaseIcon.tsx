import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIc24FormatIndentDecreaseIcon(props: ISvgProps) {
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
        d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h18ZM6.293 7.293c.602-.603 1.614-.22 1.701.593L8 8v8c0 .852-.986 1.297-1.623.783l-.084-.076-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4ZM21 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Zm0-4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Zm0-4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Zm0-5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h18Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIc24FormatIndentDecreaseIcon;
