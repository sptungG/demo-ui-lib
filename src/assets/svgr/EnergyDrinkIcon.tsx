import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgEnergyDrinkIcon(props: ISvgProps) {
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
        d="M16.802 2H5a1 1 0 1 0 0 2h.859L4.168 6.536A1 1 0 0 0 4 7.091v12.273a2.823 2.823 0 0 0 2.818 2.818h10.91a2.824 2.824 0 0 0 2.817-2.818V7.09a1 1 0 0 0-.168-.555L18.687 4h.858a1 1 0 0 0 0-2h-2.743ZM6 7.394 8.262 4h8.02l2.263 3.394v11.97c0 .447-.37.818-.818.818H6.818A.823.823 0 0 1 6 19.364V7.394Zm7.167 2.417a1 1 0 1 0-1.789-.895L9.56 12.553A1 1 0 0 0 10.454 14h2.019l-1.095 2.19a1 1 0 0 0 1.789.894l1.818-3.637A1 1 0 0 0 14.091 12h-2.019l1.095-2.19Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgEnergyDrinkIcon;
