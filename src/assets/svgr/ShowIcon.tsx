import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShowIcon(props: ISvgProps) {
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
        d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M12 5c-7.592 0-9.874 6.617-9.895 6.684L2 12l.104.316C2.126 12.383 4.408 19 12 19c7.592 0 9.874-6.617 9.895-6.684L22 12l-.104-.316C21.874 11.617 19.592 5 12 5Zm0 12c-5.322 0-7.384-3.846-7.883-5 .5-1.158 2.564-5 7.883-5 5.322 0 7.384 3.846 7.883 5-.5 1.158-2.564 5-7.883 5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShowIcon;
