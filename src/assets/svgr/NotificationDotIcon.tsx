import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgNotificationDotIcon(props: ISvgProps) {
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
        d="M10 2h3.646a4.5 4.5 0 0 0 4.302 7.4c.035.358.052.725.052 1.1V16l2 1v2H4v-2l2-1v-5.5c0-3.08 1.13-5.64 4-6.32V2ZM14 20a2 2 0 1 1-4 0h4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M14 5a3.001 3.001 0 1 1 3.68 2.923A3 3 0 0 1 14 5Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgNotificationDotIcon;
