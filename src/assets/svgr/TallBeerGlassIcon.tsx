import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTallBeerGlassIcon(props: ISvgProps) {
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
        d="M5 3a1 1 0 0 1 1-1h11.667a1 1 0 0 1 1 1c0 1.07-.062 2.197-.167 3.338 0 .06-.006.12-.017.178-.235 2.466-.663 4.984-1.086 7.097a98.673 98.673 0 0 1-1.155 5.064l-.032.124.739 2.216A1 1 0 0 1 16 22.333H7.667a1 1 0 0 1-.949-1.316l.742-2.226-.04-.165a129.65 129.65 0 0 1-1.152-5.331c-.393-2.035-.794-4.389-1.036-6.607a.998.998 0 0 1-.054-.508A32.823 32.823 0 0 1 5 3ZM16.65 4c-.016.437-.04.882-.073 1.333H7.11A33.138 33.138 0 0 1 7.023 4h9.626ZM9.167 7.333v1.5a1 1 0 1 0 2 0v-1.5h5.219a73.89 73.89 0 0 1-.95 5.888 96.467 96.467 0 0 1-1.13 4.954l-.077.296-.02.076-.005.018-.002.004v.001a1 1 0 0 0 .016.58l.395 1.183H9.054l.395-1.183a1 1 0 0 0 .021-.56l-.001-.005-.005-.02-.02-.084a108.12 108.12 0 0 1-.359-1.524c-.233-1.02-.543-2.442-.853-4.043a87.345 87.345 0 0 1-.91-5.58h1.845Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgTallBeerGlassIcon;
