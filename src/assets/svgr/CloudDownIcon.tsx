import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCloudDownIcon(props: ISvgProps) {
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
        d="M12 4a8.003 8.003 0 0 1 7.763 6.058A5.001 5.001 0 0 1 19 20H6a6 6 0 0 1-.975-11.921A7.997 7.997 0 0 1 12 4Zm-6.652 6.053.948-.155.472-.837a6.003 6.003 0 0 1 11.054 1.481l.322 1.291 1.316.202A3.001 3.001 0 0 1 19 18H6a4 4 0 0 1-.652-7.947Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M13.45 12H16l-4 4-4-4h2.55V9h2.9v3Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgCloudDownIcon;
