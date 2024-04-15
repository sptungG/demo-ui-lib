import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMoonIcon(props: ISvgProps) {
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
        d="M11.971 22h-.903c-5.516-.503-9.527-5.427-9.026-10.955A9.884 9.884 0 0 1 11.068 2c.402 0 .803.201 1.003.503.2.301.2.804-.1 1.105-1.003 1.307-1.304 2.915-1.103 4.523.2 1.608 1.103 3.015 2.407 3.92a5.858 5.858 0 0 0 7.12 0c.301-.202.702-.302 1.104-.101.3.2.501.603.501 1.005-.2 2.713-1.504 5.125-3.61 6.834C16.484 21.196 14.278 22 11.97 22ZM9.163 4.312C6.254 5.317 4.249 7.93 3.948 11.146c-.401 4.422 2.808 8.341 7.22 8.743 2.107.201 4.213-.402 5.817-1.809 1.104-.904 1.906-2.11 2.407-3.417-2.507.905-5.315.503-7.521-1.105-1.705-1.307-2.808-3.116-3.21-5.226-.1-1.407.1-2.714.502-4.02Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMoonIcon;
