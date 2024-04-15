import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeIcon(props: ISvgProps) {
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
        d="M2 5a1 1 0 0 1 1-1h13.333a1 1 0 0 1 1 1v.667h1.084c2.135 0 3.916 1.78 3.916 3.916s-1.78 3.917-3.916 3.917H17.24c-.457 2.395-2.53 4.167-5.073 4.167h-5A5.126 5.126 0 0 1 2 12.5V5Zm15.333 6.5h1.084c1.03 0 1.916-.886 1.916-1.917 0-1.03-.885-1.916-1.916-1.916h-1.084V11.5Zm-2-4.833V12.5c0 1.781-1.385 3.167-3.166 3.167h-5C5.386 15.667 4 14.28 4 12.5V6h11.333v.667ZM2 20a1 1 0 0 1 1-1h16.667a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeIcon;
