import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgNotificationOutlineMinusIcon(props: ISvgProps) {
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
      <path d="M15 11H9v2h6v-2Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4.18c2.87.68 4 3.25 4 6.32V16l2 1v2H4v-2l2-1v-5.5c0-3.08 1.14-5.64 4-6.32V2h4v2.18ZM16 17H8v-6.5c0-2.48 1-4.75 4-4.75s4 2.27 4 4.75V17Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M14 20c0 1.1-.9 2-2 2s-2-.9-2-2h4Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgNotificationOutlineMinusIcon;
