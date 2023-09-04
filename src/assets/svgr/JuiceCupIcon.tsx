import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgJuiceCupIcon(props: ISvgProps) {
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
        d="M13.015 2.553A1 1 0 0 1 13.909 2h2.727a1 1 0 0 1 0 2h-2.109l-.818 1.636H21.182a1 1 0 1 1 0 2h-.937l-.791 6.24a1.029 1.029 0 0 1-.04.316l-.693 5.468c-.15 1.421-1.402 2.522-2.812 2.522H8.182c-1.411 0-2.664-1.103-2.812-2.526L3.93 7.636H3a1 1 0 1 1 0-2h8.473l1.542-3.083Zm4.549 10.328.665-5.245H12.11a.97.97 0 0 1-.042 0H5.945l.308 2.575c1.668.074 2.91.25 3.907.488 1.174.28 1.976.641 2.687.976l.158.075c.633.299 1.171.553 1.915.755.648.176 1.474.317 2.644.376Zm-11.07-.656c1.4.078 2.415.231 3.201.42.977.233 1.635.526 2.3.84l.168.08c.625.295 1.312.62 2.233.87.78.212 1.707.366 2.916.435l-.577 4.55v.006l-.003.02c-.039.39-.42.736-.823.736H8.182c-.404 0-.784-.346-.823-.736l-.002-.02-.863-7.2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgJuiceCupIcon;
