import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgListIcon(props: ISvgProps) {
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
        d="M20.16 4.51H8.86c-1.014 0-1.84.826-1.84 1.842 0 1.015.826 1.84 1.84 1.84H20.16c1.014 0 1.84-.825 1.84-1.84a1.843 1.843 0 0 0-1.84-1.842ZM3.841 4.51A1.843 1.843 0 0 0 2 6.352c0 1.015.826 1.84 1.841 1.84a1.843 1.843 0 0 0 1.841-1.84 1.843 1.843 0 0 0-1.84-1.842ZM3.841 10.159A1.843 1.843 0 0 0 2 12c0 1.015.826 1.841 1.841 1.841A1.843 1.843 0 0 0 5.682 12a1.843 1.843 0 0 0-1.84-1.841ZM3.841 15.807A1.843 1.843 0 0 0 2 17.648c0 1.016.826 1.842 1.841 1.842a1.843 1.843 0 0 0 1.841-1.842 1.843 1.843 0 0 0-1.84-1.84ZM20.16 10.159H8.86c-1.014 0-1.84.825-1.84 1.842 0 1.014.826 1.84 1.84 1.84H20.16c1.014 0 1.84-.825 1.84-1.84a1.843 1.843 0 0 0-1.84-1.842ZM20.16 15.807H8.86c-1.014 0-1.84.826-1.84 1.842 0 1.015.826 1.84 1.84 1.84H20.16c1.014 0 1.84-.825 1.84-1.84a1.843 1.843 0 0 0-1.84-1.842Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgListIcon;
