import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileNewIcon(props: ISvgProps) {
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
        d="m20.52 8.317.01.031c.031.092.05.187.056.284a.16.16 0 0 0 .007.032.127.127 0 0 1 .007.036v12.1c0 1.213-.987 2.2-2.2 2.2H5.2C3.987 23 3 22.013 3 20.8V3.2C3 1.987 3.987 1 5.2 1h7.7c.012 0 .024.004.036.007.01.003.021.006.032.007a1.09 1.09 0 0 1 .318.067 1.097 1.097 0 0 1 .393.241l6.6 6.6a.94.94 0 0 1 .242.395ZM14 7.6h2.845L14 4.755V7.6ZM5.2 3.2v17.6h13.202l-.002-11h-5.5c-.608 0-1.1-.492-1.1-1.1V3.2H5.2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M12.9 12h-2.2v2.2H8.5v2.2h2.2v2.2h2.2v-2.2h2.2v-2.2h-2.2V12Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFileNewIcon;
