import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageDelivery2Icon(props: ISvgProps) {
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
        d="M16.018 2H7.982a5.962 5.962 0 0 0-4.18 1.708.597.597 0 0 0-.09.089A5.962 5.962 0 0 0 2 7.982v8.036A5.989 5.989 0 0 0 7.982 22h8.036a5.962 5.962 0 0 0 4.192-1.72.584.584 0 0 0 .088-.088A5.962 5.962 0 0 0 22 16.018V7.982A5.989 5.989 0 0 0 16.018 2ZM7.982 3.171h8.036c1.12 0 2.152.385 2.97 1.03l-1.636 1.637H6.671L5.024 4.19a4.787 4.787 0 0 1 2.958-1.02Zm-.965 11.067v-1.651h9.992v1.652H7.017Zm9.992 1.172v1.583H7.017V15.41h9.992Zm-9.992-3.995V9.871h9.992v1.544H7.017Zm0-2.716V7.01h9.992V8.7H7.017ZM3.17 16.018V7.982c0-1.117.383-2.146 1.024-2.963l1.65 1.65v10.667l-1.648 1.648a4.787 4.787 0 0 1-1.026-2.966Zm12.847 4.81H7.982c-1.113 0-2.14-.38-2.955-1.017l1.647-1.647h10.678l1.636 1.636a4.787 4.787 0 0 1-2.97 1.029Zm3.796-1.859-1.634-1.633V6.666l1.635-1.634a4.786 4.786 0 0 1 1.013 2.95v8.036c0 1.111-.379 2.136-1.014 2.951Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageDelivery2Icon;
