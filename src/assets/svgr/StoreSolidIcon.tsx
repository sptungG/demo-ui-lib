import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStoreSolidIcon(props: ISvgProps) {
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
        d="M10.25 6.5h-3.5a.75.75 0 1 1 0-1.5h3.5a.75.75 0 1 1 0 1.5ZM10.25 11.5h-3.5a.75.75 0 1 1 0-1.5h3.5a.75.75 0 1 1 0 1.5ZM15.38 8.75h-.76a.623.623 0 0 1-.62-.63c0-.342.28-.62.62-.62h2.13a.75.75 0 1 0 0-1.5h-1v-.75a.75.75 0 1 0-1.5 0v.788a2.123 2.123 0 0 0 .37 4.212h.76c.342 0 .62.28.62.63 0 .342-.28.62-.62.62h-2.13a.75.75 0 1 0 0 1.5h1v.75a.75.75 0 1 0 1.5 0v-.787a2.123 2.123 0 0 0-.37-4.213Z"
        fill="#08F"
      />
      <path
        d="M22.608 8.265 21.5 7.637v-.801c0-.8-.31-1.553-.878-2.12l-2.828-2.834A2.98 2.98 0 0 0 15.67 1H5.5c-1.655 0-3 1.345-3 3v3.636l-1.108.628A2.757 2.757 0 0 0 0 10.655v.093l4.5 2.405V4a1 1 0 0 1 1-1h10.17c.268 0 .52.103.708.294l2.83 2.833c.185.186.292.445.292.707v6.32l4.5-2.405v-.093c0-.989-.534-1.904-1.392-2.391Z"
        fill="#08F"
      />
      <path
        d="M11.998 18.493c-.437 0-.873-.103-1.27-.31L0 12.45v9.8A2.753 2.753 0 0 0 2.75 25h18.5A2.753 2.753 0 0 0 24 22.25v-9.8l-10.72 5.728c-.404.21-.843.315-1.282.315Z"
        fill="#08F"
      />
    </svg>
  );
}
export default SvgStoreSolidIcon;
