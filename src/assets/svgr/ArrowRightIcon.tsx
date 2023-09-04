import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowRightIcon(props: ISvgProps) {
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
        d="M4.91 19.11c-3.889-3.89-3.863-10.222.057-14.143 3.921-3.92 10.253-3.946 14.142-.056 3.89 3.89 3.865 10.22-.056 14.142-3.921 3.92-10.253 3.946-14.142.056Zm6.36-2.806 3.893-3.894c.19-.19.19-.51 0-.7L11.26 7.816a.997.997 0 1 0-1.411 1.411l2.833 2.833-2.823 2.833a.997.997 0 1 0 1.411 1.411Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowRightIcon;
