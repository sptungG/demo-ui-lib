import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileFindIcon(props: ISvgProps) {
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
        d="M13.678 1.322A1.095 1.095 0 0 0 12.9 1H5.2C3.987 1 3 1.987 3 3.2v17.6c0 1.213.987 2.2 2.2 2.2h13.2c1.213 0 2.2-.987 2.2-2.2V8.7c0-.293-.116-.572-.322-.778l-6.6-6.6ZM5.2 3.2h7.245L18.4 9.155l.002 10.092-2.825-2.825A4.37 4.37 0 0 0 16.2 14.2c0-2.427-1.973-4.4-4.4-4.4a4.404 4.404 0 0 0-4.4 4.4c0 2.427 1.973 4.4 4.4 4.4a4.37 4.37 0 0 0 2.222-.623l2.823 2.823H5.2V3.2Zm6.6 13.2c-1.213 0-2.2-.987-2.2-2.2s.987-2.2 2.2-2.2 2.2.987 2.2 2.2-.987 2.2-2.2 2.2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFileFindIcon;
