import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFolderMinusIcon(props: ISvgProps) {
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
      <path d="M16 12H8v2h8v-2Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.414 5H20c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h6c.266 0 .52.105.707.293L12.414 5ZM4 7v12h16.002L20 7H4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFolderMinusIcon;
