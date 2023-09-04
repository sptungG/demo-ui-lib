import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgNotificationOutlinePlusIcon(props: ISvgProps) {
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
      <path d="M13 11h2v2h-2v2h-2v-2H9v-2h2V9h2v2Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10.5c0-3.07-1.13-5.64-4-6.32V2h-4v2.18c-2.86.68-4 3.24-4 6.32V16l-2 1v2h16v-2l-2-1v-5.5ZM8 17h8v-6.5c0-2.48-1-4.75-4-4.75S8 8.02 8 10.5V17Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgNotificationOutlinePlusIcon;
