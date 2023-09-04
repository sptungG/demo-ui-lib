import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFlagOutlineIcon(props: ISvgProps) {
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
        d="m12.78 4.05.72 1.45h5c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-5.39a1 1 0 0 1-.89-.55l-.72-1.45h-5v6c0 .55-.45 1-1 1s-1-.45-1-1v-15c0-.55.45-1 1-1h6.38c.38 0 .73.21.9.55Zm.72 9.45h4v-6h-5l-1-2h-5v6h6l1 2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFlagOutlineIcon;
