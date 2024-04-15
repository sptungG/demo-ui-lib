import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgGroupPaymentIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M21.75 0H6.25C5.01 0 4 1.01 4 2.25v9c0 1.241 1.01 2.25 2.25 2.25h15.5c1.241 0 2.25-1.009 2.25-2.25v-9C24 1.01 22.992 0 21.75 0ZM9.25 4.5h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5ZM14 9.75c-1.655 0-3-1.345-3-3 0-1.654 1.345-3 3-3s3 1.346 3 3c0 1.655-1.345 3-3 3Zm6.25.75h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5Z"
        fill="#08F"
      />
      <path
        d="M20.25 15H4.75c-1.24 0-2.25-1.009-2.25-2.25V3.987L.073 13.03a2.272 2.272 0 0 0 1.592 2.755L17.13 19.93a2.244 2.244 0 0 0 2.743-1.592l.921-3.41a2.204 2.204 0 0 1-.543.074Z"
        fill="#08F"
      />
    </svg>
  );
}
export default SvgGroupPaymentIcon;
