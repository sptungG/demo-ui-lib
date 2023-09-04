import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgInstagramIcon(props: ISvgProps) {
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
        d="M11.992 6.856a5.134 5.134 0 0 0-5.134 5.134 5.134 5.134 0 1 0 5.134-5.134Zm0 8.47a3.336 3.336 0 1 1 0-6.672 3.336 3.336 0 0 1 0 6.672ZM17.331 7.864a1.197 1.197 0 1 0 0-2.394 1.197 1.197 0 0 0 0 2.394Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M21.47 5.45a5.114 5.114 0 0 0-2.924-2.924 7.337 7.337 0 0 0-2.428-.466c-1.07-.047-1.408-.06-4.12-.06s-3.06 0-4.12.06a7.28 7.28 0 0 0-2.426.466A5.108 5.108 0 0 0 2.528 5.45a7.313 7.313 0 0 0-.466 2.427C2.014 8.946 2 9.285 2 11.997c0 2.713 0 3.058.062 4.121.017.83.173 1.65.466 2.43a5.12 5.12 0 0 0 2.925 2.922 7.31 7.31 0 0 0 2.427.5c1.07.047 1.408.061 4.12.061s3.06 0 4.12-.061a7.347 7.347 0 0 0 2.428-.465 5.123 5.123 0 0 0 2.925-2.925 7.317 7.317 0 0 0 .465-2.427c.048-1.069.062-1.408.062-4.12 0-2.714 0-3.058-.062-4.121a7.307 7.307 0 0 0-.468-2.462Zm-1.352 10.586a5.602 5.602 0 0 1-.346 1.875 3.317 3.317 0 0 1-1.901 1.9 5.537 5.537 0 0 1-1.855.345c-1.055.05-1.353.062-4.058.062-2.708 0-2.984 0-4.06-.062a5.509 5.509 0 0 1-1.853-.345 3.315 3.315 0 0 1-1.91-1.9 5.643 5.643 0 0 1-.345-1.854c-.047-1.055-.059-1.353-.059-4.058 0-2.707 0-2.983.06-4.06.007-.64.123-1.272.345-1.873a3.317 3.317 0 0 1 1.909-1.901 5.563 5.563 0 0 1 1.853-.346c1.057-.048 1.353-.06 4.06-.06 2.706 0 2.984 0 4.058.06a5.51 5.51 0 0 1 1.855.346 3.322 3.322 0 0 1 1.901 1.901c.218.593.336 1.22.346 1.854.047 1.056.06 1.352.06 4.059 0 2.705 0 2.996-.048 4.058h-.012v-.001Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgInstagramIcon;
