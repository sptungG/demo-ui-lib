import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgColorIcon(props: ISvgProps) {
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
        d="M10.75 22H4.917a2.084 2.084 0 0 1-2.084-2.083v-9.7a1.974 1.974 0 0 1-.592-2.559 218.452 218.452 0 0 1 2.72-4.711A1.971 1.971 0 0 1 6.667 2c.529 0 .81.17 1.204.4.552.32 7.5 4.46 10.427 6.2.072.043 2.805 1.657 2.874 1.704.552.409.829.998.829 1.612 0 .312-.077.62-.246.941a213.232 213.232 0 0 1-2.72 4.713c-.482.767-1.346 1.075-2.08.907-.327.195-4.856 3.125-5.21 3.306-.345.177-.636.217-.994.217ZM4.5 13.03v6.887c0 .228.184.416.417.416H8.74a496.076 496.076 0 0 1-4.24-7.302ZM5.838 12c.045.076 4.734 8.163 4.772 8.215a.3.3 0 0 0 .38.082c.136-.077 4.233-2.71 4.233-2.71-.532-.314-6.786-4.042-9.385-5.588Zm.55-8.192c-.761 1.214-2.666 4.604-2.696 4.675a.314.314 0 0 0 .124.387c.167.1 13.352 7.956 13.48 7.976a.313.313 0 0 0 .315-.145c.785-1.32 2.671-4.625 2.693-4.668a.316.316 0 0 0-.125-.387c-.167-.1-13.319-7.916-13.408-7.955a.313.313 0 0 0-.383.117Zm1.297 2.246a1.668 1.668 0 0 1 0 3.333 1.667 1.667 0 0 1 0-3.333Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgColorIcon;
