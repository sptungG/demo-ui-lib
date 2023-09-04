import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTrolleyEmptyIcon(props: ISvgProps) {
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
        d="M20.103 17.63a.575.575 0 0 0-.562.586c0 .682-.532 1.236-1.185 1.236H8.58a1.93 1.93 0 0 0-1.23-1.283V4.547c0-.653-.394-1.247-.979-1.478l-2.608-1.03a.556.556 0 0 0-.725.34.595.595 0 0 0 .326.757l2.609 1.03c.15.06.251.213.251.381v13.622c-.762.25-1.316.994-1.316 1.87C4.907 21.12 5.75 22 6.786 22c.84 0 1.553-.578 1.793-1.374h9.777c1.274 0 2.31-1.08 2.31-2.41a.575.575 0 0 0-.563-.587ZM6.786 20.826c-.416 0-.754-.353-.754-.787 0-.433.338-.786.754-.786s.754.353.754.786c0 .434-.338.787-.754.787Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgTrolleyEmptyIcon;
