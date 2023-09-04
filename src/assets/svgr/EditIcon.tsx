import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgEditIcon(props: ISvgProps) {
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
        d="m14.013 6.987-8.69 8.69-.187 2.068a.768.768 0 0 0 .834.834l2.07-.188 8.688-8.688-2.715-2.716ZM17.271 9.16l1.63-1.63c.299-.3.299-.786 0-1.086l-1.63-1.629c-.3-.3-.786-.3-1.086 0l-1.63 1.63 2.716 2.715Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgEditIcon;
