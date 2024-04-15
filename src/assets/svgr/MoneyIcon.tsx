import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgMoneyIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M10.36 19c1.21 0 2.146-.116 2.897-.352a1.43 1.43 0 0 1 .408-1.288 1.43 1.43 0 0 1 0-2.051 1.43 1.43 0 0 1 0-2.051 1.43 1.43 0 0 1-.434-1.026c0-.474.234-.893.59-1.154a5.81 5.81 0 0 0-.778-.6.804.804 0 0 0 .188-.501.82.82 0 0 0-.82-.82H8.308a.82.82 0 0 0-.82.82c0 .192.075.36.186.5C6.083 11.503 5 13.36 5 15.31 5 18.618 8.07 19 10.36 19Zm-.005-3.981c-.679 0-1.23-.552-1.23-1.23 0-.537.346-.988.824-1.157v-.605a.41.41 0 1 1 .82 0v.608c.475.17.816.62.816 1.153a.41.41 0 1 1-.82 0 .41.41 0 1 0-.41.41c.678 0 1.23.552 1.23 1.23 0 .533-.341.983-.816 1.154v.367a.41.41 0 1 1-.82 0v-.364a1.228 1.228 0 0 1-.824-1.156.41.41 0 1 1 .82 0 .41.41 0 1 0 .41-.41ZM18.385 17.77h-3.719a.615.615 0 0 0 0 1.23h3.719a.615.615 0 0 0 0-1.23ZM18.385 15.719h-3.719a.615.615 0 1 0 0 1.23h3.719a.615.615 0 0 0 0-1.23ZM18.385 13.668h-3.719a.615.615 0 1 0 0 1.23h3.719a.615.615 0 0 0 0-1.23ZM18.385 11.617h-3.719a.615.615 0 0 0 0 1.23h3.719a.615.615 0 0 0 0-1.23ZM11.514 5.82c-.17-.476-.62-.82-1.155-.82-.534 0-.99.343-1.16.82h-1.3a.41.41 0 0 0-.39.54l.64 1.976h4.42l.64-1.976a.41.41 0 0 0-.389-.54h-1.306Z"
        fill="#fff"
      />
    </svg>
  );
}
export default SvgMoneyIcon;
