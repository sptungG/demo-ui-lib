import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowCircleChevronUpIcon(props: ISvgProps) {
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
        d="M19.1 19.1c-3.89 3.889-10.222 3.863-14.143-.057C1.037 15.122 1.011 8.79 4.901 4.9c3.89-3.89 10.22-3.865 14.142.056 3.92 3.921 3.946 10.253.056 14.142Zm-2.806-6.36L12.4 8.848a.502.502 0 0 0-.7 0L7.806 12.75a.997.997 0 1 0 1.411 1.411l2.833-2.833 2.833 2.823a.997.997 0 1 0 1.411-1.411Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowCircleChevronUpIcon;
