import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeCupIcon(props: ISvgProps) {
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
        d="M7.439 2.553A1 1 0 0 1 8.333 2h8.334a1 1 0 0 1 .894.553l1.39 2.78h1.05a1 1 0 1 1 0 2h-.78L18.96 9.5h.206a1 1 0 0 1 .992 1.124l-.833 6.667a1 1 0 0 1-.992.876h-.28l-.394 3.285a1 1 0 0 1-.993.881H8.333a1 1 0 0 1-.993-.88l-.394-3.286h-.28a1 1 0 0 1-.991-.876l-.834-6.667A1 1 0 0 1 5.833 9.5h.207l-.26-2.167H5a1 1 0 1 1 0-2H6.05l1.39-2.78ZM7.152 11.5H18.034l-.583 4.667H7.55L6.966 11.5h.186Zm1.809 6.667.26 2.166h6.559l.26-2.166H8.96ZM16.946 9.5H8.054l-.26-2.167h9.412l-.26 2.167ZM16.05 4l.666 1.333h-8.43L8.95 4h7.098Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeCupIcon;
