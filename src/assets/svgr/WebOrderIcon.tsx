import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgWebOrderIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M5.766 5.634a.777.777 0 1 0 0-1.554.777.777 0 0 0 0 1.554ZM7.913 17.989l.062-.012-.062.012a1.491 1.491 0 0 0 1.466 1.216h5.243c.717 0 1.333-.51 1.465-1.216l.804-4.286a1.491 1.491 0 0 0-1.466-1.766h-.506a2.92 2.92 0 0 0-5.838 0h-.506c-.934 0-1.638.849-1.465 1.766l.803 4.286Zm1.518-.337-.78-4.161h6.699l-.78 4.16H9.43ZM12 10.634c.733 0 1.331.578 1.364 1.303h-2.73A1.366 1.366 0 0 1 12 10.634Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.125}
      />
      <path
        d="M4.143 1.938a2.205 2.205 0 0 0-2.205 2.205v15.714c0 1.218.987 2.206 2.205 2.206h15.714a2.205 2.205 0 0 0 2.206-2.206V4.143a2.205 2.205 0 0 0-2.206-2.205H4.143Zm16.366 2.205v2.08H3.49v-2.08c0-.36.292-.652.652-.652h15.714c.36 0 .652.292.652.652ZM3.49 7.777H20.51v12.08c0 .36-.292.652-.652.652H4.143a.652.652 0 0 1-.652-.652V7.777Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.125}
      />
    </svg>
  );
}
export default SvgWebOrderIcon;
