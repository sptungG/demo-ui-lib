import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBeerGlassIcon(props: ISvgProps) {
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
        d="M5 3a1 1 0 0 1 1-1h12.727a1 1 0 0 1 1 1v.818c0 .874-.033 1.761-.105 2.65a1.01 1.01 0 0 1-.045.507 27.378 27.378 0 0 1-.792 4.462c-.612 2.362-.876 4.73-.876 7.109v.818a2.824 2.824 0 0 1-2.818 2.818H9.636a2.824 2.824 0 0 1-2.818-2.818v-.819c0-2.384-.265-4.84-.875-7.103l-.002-.01C5.281 8.888 5 6.349 5 3.819V3Zm12.727 1c-.003.543-.02 1.09-.052 1.636H7.053C7.02 5.091 7.003 4.546 7 4h10.726ZM9.545 7.636v1.728a1 1 0 0 0 2 0V7.636h5.946a24.662 24.662 0 0 1-.638 3.286l-.003.009c-.66 2.545-.94 5.085-.94 7.615v.818c0 .447-.371.818-.82.818H9.637a.824.824 0 0 1-.818-.818v-.819c0-2.522-.28-5.156-.942-7.619a26.897 26.897 0 0 1-.635-3.29h2.304Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBeerGlassIcon;
