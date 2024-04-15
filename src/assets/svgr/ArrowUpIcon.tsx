import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowUpIcon(props: ISvgProps) {
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
        d="M19.11 19.11c-3.89 3.889-10.222 3.864-14.143-.057C1.047 15.132 1.021 8.8 4.911 4.91c3.89-3.89 10.22-3.865 14.142.056 3.92 3.921 3.946 10.253.056 14.142Zm-6.099-3.096v-5.175l1.892 1.882a.997.997 0 1 0 1.411-1.412L12.37 7.365c-.2-.2-.51-.2-.71 0L7.716 11.31a.997.997 0 1 0 1.411 1.412l1.882-1.882v5.175c0 .55.45 1.001 1.001 1.001.55 0 1.001-.45 1.001-1.001Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowUpIcon;
