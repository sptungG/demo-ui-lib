import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShoppingCartIcon(props: ISvgProps) {
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
        d="M2 3a1 1 0 0 1 1-1h2a1 1 0 0 1 .98.804L6.22 4H21a1 1 0 0 1 .894 1.447l-4 8A1 1 0 0 1 17 14H7.414l-2 2H17a3 3 0 1 1-2.828 2H9.828a3 3 0 1 1-5.52-.326c-.979-.65-1.268-2.128-.308-3.088l1.914-1.915L4.18 4H3a1 1 0 0 1-1-1Zm5.82 9h8.562l3-6H6.62l1.2 6ZM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShoppingCartIcon;
