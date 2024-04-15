import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgNotificationDeactivatedIcon(props: ISvgProps) {
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
        d="M20.999 20.487 4.029 3.517l.001-.002-1.415 1.414 3.567 3.567A10.42 10.42 0 0 0 6 10.5V16l-2 1v2h12.686l2.9 2.9 1.413-1.413ZM18 14.66V10.5c0-3.07-1.14-5.64-4-6.32V2h-4v2.18a4.928 4.928 0 0 0-1.721.758L18 14.659Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M14 20a2 2 0 1 1-4 0h4Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgNotificationDeactivatedIcon;
