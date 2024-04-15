import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowShareIcon(props: ISvgProps) {
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
        d="M3.25 20.125a.626.626 0 0 1-.625-.625c0-5.68.718-10.403 9.375-10.618V4.5a.625.625 0 0 1 1.05-.459l8.124 7.5a.623.623 0 0 1 0 .918l-8.125 7.5A.625.625 0 0 1 12 19.5v-4.367c-5.937.143-7.033 2.333-8.19 4.647a.625.625 0 0 1-.559.346Zm9.375-6.25c.345 0 .625.28.625.625v3.572L19.828 12 13.25 5.928V9.5c0 .345-.28.625-.625.625-6.904 0-8.391 2.67-8.683 6.936 1.294-1.74 3.5-3.186 8.683-3.186Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowShareIcon;
