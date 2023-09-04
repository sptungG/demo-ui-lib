import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgRewardPointsIcon(props: ISvgProps) {
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
        d="M11.29 9.71a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21L15 7.46A1.032 1.032 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1.032 1.032 0 1 0 9 7.46l2.29 2.25ZM20 8h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m10.806 14.113-1.799-.274-.804-1.707a.223.223 0 0 0-.407 0l-.803 1.707-1.8.274a.223.223 0 0 0-.129.069.244.244 0 0 0 .005.336l1.3 1.329-.307 1.876a.247.247 0 0 0 .014.13.236.236 0 0 0 .077.102.22.22 0 0 0 .238.018L8 17.087l1.609.886a.216.216 0 0 0 .144.023.236.236 0 0 0 .185-.273l-.308-1.876 1.301-1.33a.24.24 0 0 0 .066-.135.235.235 0 0 0-.19-.27Z"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={1.25}
      />
      <path
        d="M14 14h5M14 17h3"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgRewardPointsIcon;
