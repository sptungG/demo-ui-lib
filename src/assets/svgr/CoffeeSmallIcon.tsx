import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeSmallIcon(props: ISvgProps) {
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
        d="M2 6a1 1 0 0 1 1-1h15.417c2.135 0 3.916 1.781 3.916 3.917 0 2.135-1.78 3.916-3.916 3.916H15.32a7.65 7.65 0 0 1-5.653 2.5C5.447 15.333 2 11.886 2 7.667V6Zm12.19 5.067c-.098.083-.18.184-.24.299a5.66 5.66 0 0 1-4.283 1.967C6.552 13.333 4 10.781 4 7.667V7h11.333v.667a5.629 5.629 0 0 1-1.142 3.4Zm2.455-.234h1.772c1.03 0 1.916-.885 1.916-1.916S19.448 7 18.417 7h-1.084v.667c0 1.127-.246 2.2-.688 3.166ZM2 17.667a1 1 0 0 1 1-1h16.667a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeSmallIcon;
