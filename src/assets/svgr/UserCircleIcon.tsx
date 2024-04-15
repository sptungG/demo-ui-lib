import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgUserCircleIcon(props: ISvgProps) {
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
        d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.926 20.056A9.986 9.986 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.986 9.986 0 0 0 4.211 8.155A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 5.926-1.944Zm-.697-2.001a8 8 0 1 0-10.457 0A5.998 5.998 0 0 1 12 15c2.243 0 4.2 1.231 5.229 3.055Zm-1.672 1.113a4 4 0 0 0-7.114 0A7.968 7.968 0 0 0 12 20c1.278 0 2.485-.3 3.557-.832Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgUserCircleIcon;
