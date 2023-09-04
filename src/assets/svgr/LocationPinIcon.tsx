import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgLocationPinIcon(props: ISvgProps) {
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
      <g clipPath="url(#location-pin-icon_svg__a)" fill="#08F">
        <path d="M15.322 7.35a3.558 3.558 0 0 0-3.554-3.553A3.558 3.558 0 0 0 8.215 7.35a3.557 3.557 0 0 0 3.553 3.554 3.557 3.557 0 0 0 3.554-3.554Z" />
        <path d="M11.768 19.781c.55-.717 3.779-5.153 4.866-6.636 1.292-1.762 2.485-3.531 2.485-5.795A7.35 7.35 0 0 0 11.769 0h-.002a7.35 7.35 0 0 0-7.349 7.35c0 2.264 1.192 4.033 2.485 5.795l4.865 6.636Zm-4.96-12.43a4.965 4.965 0 0 1 4.96-4.96 4.965 4.965 0 0 1 4.96 4.96 4.965 4.965 0 0 1-4.96 4.959 4.965 4.965 0 0 1-4.96-4.96Z" />
        <path d="M14.467 18.478c-.146.2-2.726 3.646-2.726 3.646l-2.673-3.646H5.832L3.75 24h16.035l-2.082-5.522h-3.236Z" />
      </g>
      <defs>
        <clipPath id="location-pin-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgLocationPinIcon;
