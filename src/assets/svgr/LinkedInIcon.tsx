import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLinkedInIcon(props: ISvgProps) {
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
        d="M21 21h-4v-6.75c0-1.059-1.188-1.944-2.246-1.944-1.06 0-1.754.885-1.754 1.944V21H9V9h4v2c.662-1.071 2.356-1.763 3.525-1.763C18.997 9.237 21 11.28 21 13.75V21ZM7 21H3V9h4v12ZM5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLinkedInIcon;
