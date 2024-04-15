import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVanCheckIcon(props: ISvgProps) {
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
        d="M17.453 9.323a.605.605 0 0 0-.829 0l-2.617 2.503-1.006-.963a.605.605 0 0 0-.83 0 .544.544 0 0 0 0 .793l1.422 1.36c.114.109.264.164.414.164.15 0 .3-.055.415-.165l3.031-2.9a.544.544 0 0 0 0-.792Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M20.442 5H9.308c-.86 0-1.558.668-1.558 1.49v1.343H4.44C3.096 7.833 2 8.88 2 10.167v5.935c0 .725.617 1.315 1.375 1.315h1.157c.268 1.153 1.346 2.019 2.632 2.019s2.364-.866 2.632-2.02h4.402c.268 1.154 1.346 2.02 2.632 2.02 1.285 0 2.363-.866 2.632-2.02h.98c.86 0 1.558-.668 1.558-1.49V6.49C22 5.668 21.301 5 20.442 5ZM4.532 16.296H3.375a.199.199 0 0 1-.203-.194v-5.935c0-.67.569-1.214 1.269-1.214H7.75v5.386a2.81 2.81 0 0 0-.586-.062c-1.286 0-2.364.866-2.632 2.02Zm2.632 2.02c-.841 0-1.525-.655-1.525-1.46 0-.804.684-1.458 1.525-1.458.84 0 1.525.654 1.525 1.459 0 .804-.684 1.458-1.525 1.458Zm9.666 0c-.841 0-1.525-.655-1.525-1.46 0-.804.684-1.458 1.525-1.458.84 0 1.525.654 1.525 1.459 0 .804-.684 1.458-1.525 1.458Zm3.612-2.02h-.98c-.269-1.153-1.347-2.019-2.633-2.019-1.285 0-2.363.866-2.631 2.02H9.796a2.564 2.564 0 0 0-.874-1.394V6.49c0-.204.173-.37.386-.37h11.134c.213 0 .386.166.386.37v9.437c0 .204-.173.37-.386.37Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgVanCheckIcon;
