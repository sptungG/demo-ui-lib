import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgAddToQueueIcon(props: ISvgProps) {
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
      <path d="M13 6h2v3h3v2h-3v3h-2v-3h-3V9h3V6Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h12c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2Zm0 2v12h12.002L20 4H8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M2 8h2v12h12v2H4c-1.103 0-2-.897-2-2V8Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgAddToQueueIcon;
