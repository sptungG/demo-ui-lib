import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgRiStore2LineIcon(props: ISvgProps) {
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
        d="M20.271 12.708v5.836h.863v1.727H3.864v-1.727h.863v-5.836A3.882 3.882 0 0 1 3 9.477c0-.715.193-1.403.547-1.99l2.342-4.055A.864.864 0 0 1 6.636 3h11.727a.864.864 0 0 1 .747.432l2.334 4.043a3.883 3.883 0 0 1-1.173 5.233Zm-1.727.63a3.883 3.883 0 0 1-3.238-1.174 3.884 3.884 0 0 1-5.613.002 3.883 3.883 0 0 1-3.239 1.173v5.205h12.09v-5.205ZM7.136 4.728 5.035 8.364A2.159 2.159 0 0 0 8.89 10.28c.29-.723 1.313-.723 1.603 0a2.16 2.16 0 0 0 4.01 0c.29-.723 1.313-.723 1.603 0a2.158 2.158 0 1 0 3.849-1.928l-2.094-3.624H7.136Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgRiStore2LineIcon;
