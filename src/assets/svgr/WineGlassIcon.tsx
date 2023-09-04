import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWineGlassIcon(props: ISvgProps) {
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
        d="M4.186 2.574A1 1 0 0 1 5.091 2h14.182a1 1 0 0 1 .904.574c.794 1.687 1.187 3.561 1.187 5.426 0 5.426-3.55 9.122-8.182 9.587v2.595h1.727a1 1 0 1 1 0 2H9.455a1 1 0 1 1 0-2h1.727v-2.595C6.549 17.122 3 13.427 3 8c0-1.865.392-3.739 1.186-5.426ZM19.364 8c0 4.735-3.203 7.636-7.182 7.636C8.203 15.636 5 12.735 5 8c0-.121.002-.243.006-.364h14.352c.004.121.006.243.006.364Zm-.252-2.364A10.497 10.497 0 0 0 18.616 4H5.747a10.495 10.495 0 0 0-.495 1.636h13.86Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWineGlassIcon;
