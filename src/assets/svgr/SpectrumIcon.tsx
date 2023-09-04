import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSpectrumIcon(props: ISvgProps) {
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
        d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.006 1.2C21.907 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.711-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.382-8.8l1.812.005ZM8.25 7h-.583a.667.667 0 0 0-.66.568L7 7.667v3.666c0 .335.247.612.568.66l.099.007h.583a3.75 3.75 0 0 1 3.745 3.55l.005.2v.583c0 .335.247.612.568.66l.099.007h3.666a.667.667 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746L8.25 7Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSpectrumIcon;
