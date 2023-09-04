import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowCircleLeftIcon(props: ISvgProps) {
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
        d="M19.1 4.9c3.889 3.89 3.863 10.222-.057 14.143-3.921 3.92-10.253 3.946-14.142.056-3.89-3.89-3.865-10.22.056-14.142C8.878 1.037 15.21 1.011 19.1 4.901ZM16.003 11H10.83l1.882-1.892a.997.997 0 1 0-1.412-1.411L7.355 11.64c-.2.2-.2.51 0 .71l3.944 3.944a.997.997 0 1 0 1.412-1.411L10.829 13h5.175c.55 0 1.001-.45 1.001-1.001 0-.55-.45-1.001-1-1.001Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowCircleLeftIcon;
