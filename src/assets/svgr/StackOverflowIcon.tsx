import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgStackOverflowIcon(props: ISvgProps) {
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
        d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24ZM7.582 17.8h8.055v-1.604H7.582V17.8Zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553Zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01Zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001Zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgStackOverflowIcon;
