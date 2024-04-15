import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeCup2Icon(props: ISvgProps) {
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
        d="M7.21 3a1 1 0 0 0-.895.553L4.987 6.209H4a1 1 0 0 0 0 2h.722L6.217 20.17a1 1 0 0 0 .992.876h9.628a1 1 0 0 0 .992-.876l1.495-11.96h.722a1 1 0 1 0 0-2h-.986L17.73 3.552A1 1 0 0 0 16.837 3H7.209Zm.882 16.046L6.737 8.209H17.31l-1.355 10.837H8.092Zm8.731-12.837L16.22 5H7.827l-.604 1.21h9.6Zm-5.405 7.419a.605.605 0 1 1 1.21 0 .605.605 0 0 1-1.21 0Zm.605-2.605a2.605 2.605 0 1 0 0 5.21 2.605 2.605 0 0 0 0-5.21Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeCup2Icon;
