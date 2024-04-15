import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVanIcon(props: ISvgProps) {
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
        d="M20.442 5H9.308c-.86 0-1.558.67-1.558 1.493v1.345H4.44c-1.345 0-2.44 1.05-2.44 2.34v5.945c0 .727.617 1.318 1.375 1.318h1.157c.268 1.156 1.346 2.023 2.632 2.023s2.364-.867 2.632-2.023h4.402c.268 1.156 1.346 2.023 2.632 2.023 1.285 0 2.363-.867 2.632-2.023h.98c.86 0 1.558-.67 1.558-1.493V6.493C22 5.67 21.301 5 20.442 5ZM4.532 16.318H3.375a.2.2 0 0 1-.203-.195v-5.946c0-.67.569-1.216 1.269-1.216H7.75v5.396a2.81 2.81 0 0 0-.586-.062c-1.286 0-2.364.867-2.632 2.023Zm2.632 2.023c-.841 0-1.525-.656-1.525-1.462 0-.805.684-1.461 1.525-1.461.84 0 1.525.656 1.525 1.462 0 .805-.684 1.461-1.525 1.461Zm9.666 0c-.841 0-1.525-.655-1.525-1.461s.684-1.462 1.525-1.462c.84 0 1.525.656 1.525 1.462 0 .805-.684 1.461-1.525 1.461Zm3.612-2.023h-.98c-.269-1.156-1.347-2.023-2.633-2.023-1.285 0-2.363.867-2.631 2.023H9.796a2.57 2.57 0 0 0-.874-1.396v-8.43c0-.203.173-.37.386-.37h11.134c.213 0 .386.167.386.37v9.456c0 .204-.173.37-.386.37Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgVanIcon;
