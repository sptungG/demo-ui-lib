import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgNotificationOutlineDotIcon(props: ISvgProps) {
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
        d="M10 2h3a4.978 4.978 0 0 0-.944 3.75H12c-3 0-4 2.27-4 4.75V17h8v-6.5c0-.203-.007-.405-.02-.604a5.022 5.022 0 0 0 2.005.007c.01.197.015.396.015.597V16l2 1v2H4v-2l2-1v-5.5c0-3.08 1.14-5.64 4-6.32V2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M14 5a3.001 3.001 0 1 1 3.682 2.922 3.009 3.009 0 0 1-3.325-1.501A2.986 2.986 0 0 1 14 5ZM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgNotificationOutlineDotIcon;
