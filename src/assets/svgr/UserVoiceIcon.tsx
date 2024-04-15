import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgUserVoiceIcon(props: ISvgProps) {
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
        d="M18.364 2.636 16.95 4.05A6.962 6.962 0 0 1 19 9a6.962 6.962 0 0 1-2.05 4.95l1.414 1.414A8.944 8.944 0 0 0 21 9a8.944 8.944 0 0 0-2.636-6.364Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416A4.967 4.967 0 0 0 17 9a4.967 4.967 0 0 0-1.465-3.536Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M12 19h2a6 6 0 0 0-12 0h2a4 4 0 0 1 8 0Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgUserVoiceIcon;
