import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCredit1Icon(props: ISvgProps) {
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
        d="M19.709 6.502H4.29A2.293 2.293 0 0 0 2 8.792v8.75a2.293 2.293 0 0 0 2.291 2.292h15.417A2.293 2.293 0 0 0 22 17.542v-8.75a2.293 2.293 0 0 0-2.291-2.29Zm-12.5 3.75H5.125a.625.625 0 1 1 0-1.25h2.084a.625.625 0 1 1 0 1.25ZM12 16.084a2.92 2.92 0 0 1-2.916-2.917A2.92 2.92 0 0 1 12 10.252a2.92 2.92 0 0 1 2.916 2.916A2.919 2.919 0 0 1 12 16.084Zm6.875 1.25h-2.084a.625.625 0 1 1 0-1.25h2.084a.625.625 0 1 1 0 1.25ZM19.709 5.667H4.29a.834.834 0 0 1 0-1.667h15.417a.834.834 0 0 1 0 1.667Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCredit1Icon;
