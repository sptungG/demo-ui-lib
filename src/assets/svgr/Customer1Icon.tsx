import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgCustomer1Icon(props: ISvgProps) {
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
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="m25 14.043 5.498 2.89-1.055-6.123 4.454-4.335-6.143-.89L25 0l-2.744 5.576-6.143.889 4.453 4.336-1.054 6.123L25 14.043ZM43.565 15.537 40.82 9.971l-2.744 5.566-6.142.89 4.443 4.335-1.055 6.123 5.498-2.89 5.498 2.89-1.054-6.123L50 16.426l-6.435-.888ZM4.736 20.772l-1.054 6.123 5.498-2.9 5.498 2.89-1.055-6.123 4.443-4.336-6.142-.888L9.18 9.97l-2.744 5.566L0 16.436l4.736 4.336ZM32.324 27.93A7.327 7.327 0 0 0 25 20.605a7.327 7.327 0 0 0-7.324 7.325A7.327 7.327 0 0 0 25 35.254a7.327 7.327 0 0 0 7.324-7.324ZM14.746 45.508V50h20.508v-4.492c0-5.655-4.6-10.254-10.254-10.254s-10.254 4.6-10.254 10.254ZM46.972 48.438a7.327 7.327 0 0 0-7.324-7.325c-.762 0-1.475.147-2.158.362.41 1.279.693 2.617.693 4.033V50h8.79v-1.563Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M45.508 35.254a5.864 5.864 0 0 0-5.86-5.86 5.864 5.864 0 0 0-5.859 5.86c0 .186.04.361.059.547 1.445 1.318 2.607 2.92 3.359 4.765a5.859 5.859 0 0 0 2.451.557 5.877 5.877 0 0 0 5.85-5.87ZM16.152 35.8c.02-.185.059-.36.059-.546a5.864 5.864 0 0 0-5.86-5.86 5.864 5.864 0 0 0-5.859 5.86 5.864 5.864 0 0 0 5.86 5.86c.878 0 1.699-.206 2.45-.557.743-1.836 1.905-3.438 3.35-4.756Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M3.027 48.438V50h8.79v-4.492c0-1.416.283-2.754.693-4.033-.684-.215-1.406-.362-2.158-.362a7.327 7.327 0 0 0-7.325 7.325Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgCustomer1Icon;
