import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowCircleChevronDownIcon(props: ISvgProps) {
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
        d="M4.91 4.91c3.89-3.889 10.222-3.863 14.143.057 3.92 3.921 3.946 10.253.056 14.142-3.89 3.89-10.22 3.865-14.142-.056C1.047 15.132 1.021 8.8 4.911 4.91Zm2.806 6.36 3.894 3.893c.19.19.51.19.7 0l3.894-3.904a.997.997 0 1 0-1.411-1.411L11.96 12.68 9.127 9.858a.997.997 0 1 0-1.411 1.411Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowCircleChevronDownIcon;
