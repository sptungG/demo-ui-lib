import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCouponIcon(props: ISvgProps) {
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
        d="M21.423 10.27A.577.577 0 0 0 22 9.691V6.615a.577.577 0 0 0-.577-.577H2.577A.577.577 0 0 0 2 6.615v3.077c0 .319.258.577.577.577.954 0 1.73.777 1.73 1.731 0 .954-.776 1.73-1.73 1.73a.577.577 0 0 0-.577.578v3.077c0 .318.258.576.577.576h18.846a.577.577 0 0 0 .577-.576v-3.077a.577.577 0 0 0-.577-.577c-.954 0-1.73-.777-1.73-1.731 0-.954.776-1.73 1.73-1.73Zm-.577 4.557v1.98H8.731v-1.73a.577.577 0 0 0-1.154 0v1.73H3.154v-1.98A2.89 2.89 0 0 0 5.462 12a2.89 2.89 0 0 0-2.308-2.827v-1.98h4.423v1.73a.577.577 0 0 0 1.154 0v-1.73h12.115v1.98A2.89 2.89 0 0 0 18.538 12a2.89 2.89 0 0 0 2.308 2.827Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M8.154 10.654a.577.577 0 0 0-.577.577v1.538a.577.577 0 0 0 1.154 0v-1.538a.577.577 0 0 0-.577-.577Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCouponIcon;
