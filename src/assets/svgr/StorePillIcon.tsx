import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStorePillIcon(props: ISvgProps) {
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
      <g clipPath="url(#store-pill-icon_svg__a)" fill="#08F">
        <path d="m15.848 20.874 3.327-3.326v-4.467c0-.99-.932-1.857-1.994-1.857h-.819V9.729h.435c.705 0 1.323-.606 1.323-1.297V5.881c0-.652-.566-1.381-1.323-1.381H15.08v3.911h-1.318V4.5h-1.62v3.911h-1.318V4.5H9.1v3.911H7.782V4.5h-1.61c-.757 0-1.323.729-1.323 1.38v2.552c0 .691.618 1.297 1.323 1.297h.347v1.495h-.687c-1.028 0-2.082.847-2.082 1.857v11.985C3.75 26.041 4.781 27 5.832 27h10.164l-.148-.147a4.232 4.232 0 0 1 0-5.979Zm-3.704-1.103v2.203a.66.66 0 0 1-1.319 0V19.77H8.623a.66.66 0 1 1 0-1.318h2.202V16.25a.66.66 0 1 1 1.319 0v2.203h2.202a.66.66 0 0 1 0 1.318h-2.202ZM25.398 17.758l-.227-.227a2.913 2.913 0 0 0-4.114 0l-1.623 1.623 4.341 4.341 1.623-1.623a2.912 2.912 0 0 0 0-4.114Z" />
        <path d="M16.78 21.807a2.912 2.912 0 0 0 0 4.114l.228.227a2.912 2.912 0 0 0 4.114 0l1.72-1.72-4.341-4.342-1.72 1.72Z" />
      </g>
      <defs>
        <clipPath id="store-pill-icon_svg__a">
          <path fill="#fff" transform="translate(3.75 4.5)" d="M0 0h22.5v22.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgStorePillIcon;
