import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgHideIcon(props: ISvgProps) {
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
        d="m4.412 3.002 16.97 16.969.001-.002.002.002-1.414 1.414-3.357-3.357c-1.257.586-2.78.972-4.614.972-7.592 0-9.874-6.617-9.896-6.684L2 12l.105-.316c.014-.042.929-2.699 3.515-4.65L3 4.415l1.412-1.412ZM15.087 16.5l-1.797-1.797c-.392.19-.83.296-1.29.296a3.02 3.02 0 0 1-3-3c0-.46.107-.898.296-1.29l-2.26-2.26C5.27 9.666 4.416 11.31 4.116 12c.5 1.154 2.562 5 7.884 5 1.184 0 2.207-.19 3.087-.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M9.5 5.261C10.261 5.094 11.093 5 12 5c7.592 0 9.874 6.617 9.896 6.684L22 12l-.105.316c-.01.033-.57 1.657-2.044 3.296L18.46 14.22A8.595 8.595 0 0 0 19.883 12c-.499-1.154-2.56-5-7.883-5-.252 0-.498.009-.736.025L9.5 5.261Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgHideIcon;
